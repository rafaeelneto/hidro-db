const jwt = require('jsonwebtoken');

const Users = require('../models/Users');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createUser = catchAsync(async (req, res, next) => {
  const token = req.token;

  // get request input
  const {
    drt,
    email,
    login_name,
    nome,
    psw,
    pswConfirm,
    scope,
    roles,
  } = req.body;

  if (!login_name && !email && !psw && !pswConfirm && !nome) {
    return next(new AppError('Bad request', 400));
  }

  const newUser = Users.createUser(
    req.user_id,
    {
      drt,
      email,
      login_name,
      nome,
      psw,
      pswConfirm,
      scope,
      roles,
    },
    req.token
  );

  return res.json({
    newUser,
  });
});
