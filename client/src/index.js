import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, gql } from '@apollo/client';

import { cache } from './graphql/cache';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:3000/v1/graphql',
  //REPLACE BY A SETTING TO HANDLE AUTHETICATION
  headers: {
    'x-hasura-admin-secret': 'myadminsecretkey',
  },
  credentials: 'same-origin',
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
