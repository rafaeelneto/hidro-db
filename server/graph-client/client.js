const { execute, makePromise } = require('apollo-link');
const { createHttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');

//SET THIS TO ENVIROMENT VARIABLE
const uri = 'http://graphql-engine:3000/v1/graphql';
const link = createHttpLink({
  uri,
  fetch,
  //headers: { 'X-Hasura-Admin-Secret': 'myadminsecretkey' },
});

exports.query = (operation) =>
  makePromise(execute(link, operation))
    .then((res) => res.data)
    .catch((error) => {
      console.log(`received error ${error}`);
    });
