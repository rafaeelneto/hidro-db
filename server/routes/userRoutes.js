const express = require('express');

const authController = require('../controllers/authController');
const usersController = require('../controllers/userController');

const router = express.Router();

router.post('/login', authController.login);

router.post('/create-user', authController.protect, usersController.createUser);

router.post('/reflesh-token', (req, res) => {
  res.status(500).json({
    msg: 'On maintanance',
  });
});

router.post('/reset_pwd', (req, res) => {
  res.status(500).json({
    msg: 'On maintanance',
  });
});

router.post('/forgot_pwd', (req, res) => {
  res.status(500).json({
    msg: 'On maintanance',
  });
});

module.exports = router;
