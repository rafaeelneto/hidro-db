//Config the enviroment variables
const dotenv = require('dotenv');
dotenv.config();

//Make the main imports
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const users = require('./models/users');

const dashboard = require('./routes/dashboard');

//Configure the express extension
const app = express();

//Import routers

//Initialize extension
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
    key: 'user_sid',
    secret: 'uemacosanpaparamiau',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

//Check for logged users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};

//The index and login acess
app.route('/')
.get(sessionChecker, (reg, res) => {
    res.sendFile(__dirname + '/public/index.html');
})
.post(sessionChecker, async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    const passTo = () => {
        req.session.user = [username, password];
        res.redirect('/dashboard');
    }

    if(username == 'visitante'){
        password = 'visitante';
        passTo();
    }else{
        const isValid = await users.autheUser(username, password)
        console.log(isValid + 'cu');
        if (isValid) {
            console.log('true');
            passTo();
        }
    }
});


//Server the static files of the public folder
app.use('/', express.static('./public/'));

//Acess to the dashboard
app.use('/dashboard', dashboard);

//Initialize the server on the enviroment port
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});