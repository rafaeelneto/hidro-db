const express = require("express");
const router = express.Router();

router.get("/", (reg, res) => {
  res.status(500).json({
    msg: "On maintanance",
  });
});

module.exports = router;
