const express = require('express');

const authController = require('../controllers/authController');
const usersController = require('../controllers/userController');

const router = express.Router();

router.post('/login', authController.login);

router.post('/create-user', authController.protect, usersController.createUser);

router.post('/refresh_token', authController.refresh_token);

router.post('/reset_psw', (req, res) => {
  res.status(500).json({
    msg: 'On maintanance',
  });
});

router.post('/forgot_psw', (req, res) => {
  res.status(500).json({
    msg: 'On maintanance',
  });
});

module.exports = router;
