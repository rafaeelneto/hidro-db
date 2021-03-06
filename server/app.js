const express = require('express');
const gql = require('graphql-tag');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');

const AppError = require('./utils/appError');

const errorHandler = require('./controllers/errorHandler');

const userRoutes = require('./routes/userRoutes');
const gqlClient = require('./graph-client/client');

const app = express();

//SET SECURITY HEADERS
app.use(helmet());

//SET THIS IN THE FUTURE TO ACCEPT OTHER DOMAINS
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//PARSE DATA FROM BODY TO REQ.BODY
app.use(express.json());
//app.use(express.json({limit: '10kb'}));
app.use(cookieParser());

//DATA SANITIZATION AGAINST XSS
app.use(xss());

//LIMIT THE QUANTITY OF REQUEST FROM AN IP
const limiter = rateLimit({
  max: 100,
  windowMs: 300 * 1000, //5 minutos
  message: 'Too many requests by your IP, please try again later',
});
app.use('/v1/api/user', limiter);

app.use(morgan('dev'));

app.use('/v1/api/user', userRoutes);

app.all('*', (req, res, next) => {
  next(
    new AppError(`Can't find the route ${req.originalUrl} on the server`, 404)
  );
});

app.use(errorHandler);

module.exports = app;
