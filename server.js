const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const pool = new Pool();

const app = express();

app.use("/", express.static("./public/"));

let count = 0

app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/public/dashboard.html");
    
    pool.query("SELECT * FROM poços WHERE poço_id=23", (err, res) => {
        console.log(err, res)
        //pool.end()
        count++;
        console.log(count);
    })
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});