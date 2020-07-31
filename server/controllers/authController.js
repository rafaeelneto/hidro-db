const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const Users = require('../models/Users');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const sendToken = (user, res) => {
  const token = jwt.sign(
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

  //res.cookie('reflesh_token');

  res.status(200).json({
    status: 'success',
    token,
  });
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

  const userInfo = await Users.getUserByID(user_id, Users.fragments.userLogin);
  userInfo.id = user_id;

  sendToken(user, res);
});

exports.reflesh_token = catchAsync(async (req, res, next) => {
  console.log(req.cookies);
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

  if (!token) {
    return next(new AppError('Log in to have access', 401));
  }

  //2) Validate the token
  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  //3) Check if the user still exist
  const user = await Users.getUserByID(
    decodedToken.id,
    Users.fragments.userCheckToken
  );

  if (!user) {
    next(new AppError("The users doesn't exist anymore", 401));
  }

  //4) Check if password was changed after token issued
  if (
    user.psw_changed_at &&
    parseInt(new Date(user.psw_changed_at).getTime() / 1000, 10) >
      decodedToken.iat
  ) {
    next(new AppError('Token has expired. Log in again'));
  }

  //5) Pass some configurations to req object
  req.user_id = decodedToken.id;
  req.token = token;
  next();
});
