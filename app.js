//Config the enviroment variables
const dotenv = require('dotenv');
dotenv.config();

//Make the main imports
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const db = require('./database/db');



const users = require('./models/Users');

const dashboard = require('./routes/dashboard');

//Configure the express extension
const app = express();

//app.use(cors());
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "localhost");
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

//Import routers

//Initialize extension
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
    key: 'user_sid',
    secret: 'YUBnçsiuaSIDSFOjadiywghdjshADShaA',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

//Check for logged users
const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};

const passTo = (req, res, username) => {
    req.session.user = [username];
    res.redirect('/dashboard');
}

app.route('/test').get(async (req, res, next) => {
    try{
        const resultQuery = await db.query('SELECT * FROM processos', []);
        console.log('requisição ao servidor');
        res.json(resultQuery);
    } catch(error){
        res.send(error);
    }
});

//The index and login acess
app.route('/')
.get(sessionChecker, (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
})
.post(sessionChecker, async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    
    if(username == users.visitante){
        password = username;
    }

    const isValid = await users.autheticateUser(username, password);
    
    if (isValid) {
        passTo(req, res, username);
    }else{
        res.send("erroooou");
    }
});

app.route('/usr/create')
.post(async (req, res) => {

    let usernameAdmin = req.body.usernameAdmin;
    let passwordAdmin = req.body.passwordAdmin;
    let username = req.body.username;
    let password = req.body.password;

    const isValid = await users.autheticateUser(usernameAdmin, passwordAdmin);
    if(isValid){
        const sucess = await users.insertNewUser(usernameAdmin, passwordAdmin, username, password);
        if(sucess){
            const isValid = await users.autheticateUser(username, password);
            passTo(req, res, username);
        }else{
            res.send(false);
        }
    }else{
        res.send(false);
    }
});

//Server the static files of the public folder
app.use('/', express.static('./public/'));

//Access to the dashboard
app.use('/dashboard', dashboard);

//Logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        users.closeDB();
    }
    res.redirect('/');
});

//Initialize the server on the enviroment port
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});
