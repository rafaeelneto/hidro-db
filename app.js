//Config the enviroment variables
const dotenv = require('dotenv');
dotenv.config();

//Make the main imports
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const users = require('./models/users');

//Configure the express extension
const app = express();

//Import routers
const index = require('./routes/index');

//Initialize extension
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
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

//The index acess
app.route('/')
    .get(sessionChecker, (reg, res) => {
        res.sendFile(resolve('./public/index.html'));
    })
    .post(sessionChecker, async (req, res) => {

        let username = req.body.username;
        let password = req.body.password;
    
        const isValid = await users.compare(username, password);
        if (res) {
            console.log('login feito')
            req.session.user = [username, password];
            res.redirect('/dashboard');
        }
    });

app.use("/", express.static('./public/'));

app.get('/dashboard', (req, res) => {
    console.log('redirect to get /dashboard')
    if (req.session.user && req.cookies.user_sid) {
        res.sendFile(__dirname + '/public/dashboard.html');
    } else {
        res.redirect('/');
    }
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});