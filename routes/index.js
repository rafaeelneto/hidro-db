const express = require("express");
const router = express.Router();

resolve = require('path').resolve;

router.get('/', (reg, res) => {
    res.sendFile(resolve('./public/index.html'));
});

module.exports = router;