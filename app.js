const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const {Pool} = require('pg');

const pool = new Pool()

const app = express();

app.use("/", express.static("./public/"));

app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/public/dashboard.html");

    /*
    pool.query('SELECT * FROM poços', (err, res) => {
        console.log(err, res)
        pool.end()
    })*/
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});