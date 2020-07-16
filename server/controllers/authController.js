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

  res.status(200).json({
    status: 'success',
    data: {
      user: {
        id: user_id,
      },
    },
  });
});
