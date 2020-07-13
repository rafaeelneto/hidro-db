const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

//TEST
app.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "miau",
  });
});

app.use("/api/v1/user", userRoutes);

module.exports = app;
