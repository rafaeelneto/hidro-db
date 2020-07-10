const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "teu cu",
    msg2: "no teu pau",
  });
});

//Initialize the server on the enviroment port
app.listen(process.env.PORT || 8081, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
