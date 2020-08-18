import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import { cache } from './graphql/cache';
import './index.css';
import App from './App';
import client from './utils/apolloLinkCreator';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );
