const express = require('express');
const gql = require('graphql-tag');

const userRoutes = require('./routes/userRoutes');
const gqlClient = require('./graph-client/client');

const app = express();

app.use(express.json());

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

module.exports = app;
