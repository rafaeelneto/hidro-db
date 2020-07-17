const jwt = require('jsonwebtoken');

const Users = require('../models/Users');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createUser = catchAsync(async (req, res, next) => {
  const token = req.token;

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
    console.log('nfidaf');
    return next(new AppError('Bad request', 400));
  }

  res.status(200).json({
    status: 'success',
    message: 'sucesso no teu cu porra',
  });
});
