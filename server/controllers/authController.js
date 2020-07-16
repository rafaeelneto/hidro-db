const jwt = require('jsonwebtoken');

const Users = require('../models/Users');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.login = catchAsync(async (req, res, next) => {
  const { login_name, drt, email, password } = req.body;

  if (!login_name && !drt && !email) {
    next(new AppError('Bad request', 400));
    return;
  }

  const user_id = await Users.getUserIDBy(login_name, email, drt);

  if (!user_id || !(await Users.verifyPassword(user_id, password))) {
    return next(new AppError('Incorrect login data', 401));
  }

  const userInfo = await Users.getUserByID(user_id);

  console.log(userInfo);

  const token = jwt.sign(
    {
      user_id,
      name: userInfo.nome,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': userInfo.roles,
        'x-hasura-default-role': 'admin',
        'x-hasura-user-id': user_id,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: '90d' }
  );
  res.status(200).json({
    status: 'success',
    token,
  });
});

exports.createUser = catchAsync((req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  console.log(token);

  const {
    login_name,
    drt,
    email,
    password,
    passwordConfirm,
    roles,
    scope,
  } = req.body;

  if (
    !login_name &&
    !email &&
    !password &&
    !passwordConfirm &&
    !passwordConfirm
  ) {
    next(new AppError('Bad request', 400));
    return;
  }
  next(new AppError('On maintance', 500));
});
