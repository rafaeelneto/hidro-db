const express = require("express");
const router = express.Router();
const users = require('./../models/users')

resolve = require('path').resolve;

router.get('/', (reg, res) => {
    res.sendFile(resolve('./public/index.html'));
});

resolve = require('path').resolve;

router.post('/', async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    const isValid = await users.compare(username, password);
    if (res) {
        console.log('login feito')
        req.session.user = [username, password];
        res.redirect('/dashboard');
    }
    /*
    User.findOne({ where: { username: username } }).then(function (user) {
        if (!res) {
        res.redirect('/');
    } else {
        req.session.user = user.dataValues;
        res.redirect('/dashboard');
    }
    });*/
});

module.exports = router;