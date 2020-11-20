import { makeVar, InMemoryCache } from '@apollo/client';

export const sideBarHiddenVar = makeVar(false);
export const tokenVar = makeVar('');
export const tokenExpiresInVar = makeVar('');
export const userLoggedInVar = makeVar(false);
export const userVisitanteVar = makeVar(false);
export const userInfoVar = makeVar({ id: '', role: '' });
export const dataStateVar = makeVar({});
export const isOnEditVar = makeVar(false);

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
        userLoggedIn: {
          read() {
            return userLoggedInVar();
          },
        },
        userVisitante: {
          read() {
            return userVisitanteVar();
          },
        },
        userInfo: {
          read() {
            return userInfoVar();
          },
        },
        dataState: {
          read() {
            return dataStateVar();
          },
        },
        isOnEdit: {
          read() {
            return isOnEditVar();
          },
        },
      },
    },
  },
});
