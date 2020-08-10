import { makeVar, InMemoryCache } from '@apollo/client';

export const sideBarHiddenVar = makeVar(false);
export const tokenVar = makeVar('');
export const tokenExpiresInVar = makeVar('');

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        sideBarHidden: {
          read() {
            return sideBarHiddenVar();
          },
        },
        token: {
          read() {
            return tokenVar();
          },
        },
        tokenExpiresIn: {
          read() {
            return tokenExpiresInVar();
          },
        },
      },
    },
  },
});
