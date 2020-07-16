const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/login', authController.login);

router.post('/create-user', authController.createUser);

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
