const express = require("express");
const router = express.Router();


router.use("/", express.static("./public/login.html"))

module.exports = router;