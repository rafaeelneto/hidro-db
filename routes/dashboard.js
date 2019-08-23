const express = require("express");
const router = express.Router();
const db = require('./../database/db');

resolve = require('path').resolve;

router.get('/', (req, res) => {
    console.log('redirect to get /dashboard');
    if (req.session.user && req.cookies.user_sid) {
        res.sendFile(resolve('./public/dashboard.html'));
    } else {
        res.redirect('/');
    }
});

module.exports = router;