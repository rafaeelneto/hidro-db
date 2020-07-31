const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const Users = require('../models/Users');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const sendAuthToken = async (user, res) => {
  //Generate main token
  const token = await jwt.sign(
    {
      id: user.id,
      name: user.nome,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': user.roles,
        'x-hasura-default-role': 'admin',
        'x-hasura-user-id': user.id,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  const refreshToken = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });

  let savedRefreshToken;

  try {
    savedRefreshToken = await Users.saveRefreshToken(
      user.id,
      refreshToken,
      token
    );
  } catch (error) {
    console.log(error);
    throw error;
  }

  //SAVE REFRESH TOKEN ON COOKIES
  res.cookie('refresh_token', savedRefreshToken, {
    expires: new Date(
      Date.now() +
        process.env.JWT_REFRESH_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    //secure: true, //SET TO PRODUCTION ONLY LATER
    httpOnly: true,
  });

  res.status(200).json({
    status: 'success',
    token,
  });
};

const verifyToken = async (token, userFragment, next) => {
  if (!token) {
    return next(new AppError('Log in to have access', 401));
  }

  //1) Validate the token
  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  //2) Check if the user still exist
  const user = await Users.getUserByID(decodedToken.id, userFragment);

  if (!user) {
    return next(new AppError("The users doesn't exist anymore", 401));
  }

  //3) Check if password was changed after token issued
  if (
    user.psw_changed_at &&
    parseInt(new Date(user.psw_changed_at).getTime() / 1000, 10) >
      decodedToken.iat
  ) {
    return next(new AppError('Token has expired. Log in again', 401));
  }

  return {
    user,
    decodedToken,
  };
};

exports.login = catchAsync(async (req, res, next) => {
  const { login_name, drt, email, password } = req.body;
  console.log(req.body);

  if (!login_name && !drt && !email) {
    next(new AppError('Bad request', 400));
    return;
  }

  const user_id = await Users.getUserIDBy(login_name, email, drt);

  if (!user_id || !(await Users.verifyPassword(user_id, password))) {
    return next(new AppError('Incorrect login data', 401));
  }

  const user = await Users.getUserByID(user_id, Users.fragments.userLogin);
  user.id = user_id;

  sendAuthToken(user, res);
});

exports.reflesh_token = catchAsync(async (req, res, next) => {
  let token;
  //1) Verify if there's a token
  if (req.cookies.refresh_token) {
    token = req.cookies.refresh_token;
  }
  //2) Validate the token
  const { user, decodedToken } = await verifyToken(
    token,
    Users.fragments.userRefreshToken,
    next
  );

  //3) Check if token store in the database is equals to cookie token
  if (!(token === user.refresh_token)) {
    return next(new AppError('Token not valid. Login again', 401));
  }

  sendAuthToken(user, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  //1) Verify if there's a token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  //2) Validate the token
  const { decodedToken } = await verifyToken(
    token,
    Users.fragments.userCheckToken,
    next
  );

  //5) Pass some configurations to req object
  req.user_id = decodedToken.id;
  req.token = token;
  next();
});
