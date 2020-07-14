const Users = require('../models/Users');

exports.login = async (req, res, next) => {
  const { login_name, drt, email, password } = req.body;

  if (!login_name && !drt && !email) {
    res.status(400).json({
      status: '400',
      msg: 'Bad request',
    });
    return;
  }

  const user_id = await Users.getUserIDBy(login_name, email, drt);

  if (!user_id || !(await Users.verifyPassword(user_id, password))) {
    res.status(401).json({
      status: '401',
      msg: 'Incorrect login data',
    });
    return;
  }

  res.status(200).json({
    data: {
      user: {
        id: user_id,
      },
    },
  });
};
