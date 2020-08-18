import { ApolloClient, createHttpLink, ApolloLink, gql } from '@apollo/client';

import { cache } from '../graphql/cache';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/v1/graphql',
});

const authLink = new ApolloLink(async (operation, forward) => {
  const { data } = await client.query({
    query: gql`
      query getToken {
        token @client
      }
    `,
  });

  const { token } = data;
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  credentials: 'same-origin',
  cache,
});

export default client;
