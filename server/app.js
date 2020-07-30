const express = require('express');
const gql = require('graphql-tag');
const morgan = require('morgan');
const cors = require('cors');

const AppError = require('./utils/appError');

const errorHandler = require('./controllers/errorHandler');

const userRoutes = require('./routes/userRoutes');
const gqlClient = require('./graph-client/client');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//TEST
app.get('/', async (req, res, next) => {
  const operation = {
    query: gql`
      query {
        pocos {
          nome
        }
      }
    `,
  };

  const data = await gqlClient.query(operation);

  res.status(200).json({
    msg: 'miau',
    data,
  });
});

app.use('/v1/api/user', userRoutes);

app.all('*', (req, res, next) => {
  next(
    new AppError(`Can't find the route ${req.originalUrl} on the server`, 404)
  );
});

app.use(errorHandler);

module.exports = app;
