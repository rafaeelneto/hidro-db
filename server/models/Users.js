//const bcrypt = require('bcryptjs');
const gql = require('graphql-tag');

const gqlClient = require('../graph-client/client');

const fragments = {
  userId: gql`
    fragment userId on users {
      id
    }
  `,
};

const getQueriesOperations = {
  userIDByLogin: (login_name) => ({
    query: gql`
      query($login_name: String) {
        users(where: { login_name: { _eq: $login_name } }) {
          ...userId
        }
      }
      ${fragments.userId}
    `,
    variables: {
      login_name,
    },
  }),
  userIdByEmail: (email) => ({
    query: gql`
      query($email: String) {
        users(where: { email: { _eq: $email } }) {
          ...userId
        }
      }
      ${fragments.userId}
    `,
    variables: {
      email,
    },
  }),
  userIdByDrt: (email) => ({
    query: gql`
      query($drt: String) {
        users(where: { drt: { _eq: $drt } }) {
          ...userId
        }
      }
      ${fragments.userId}
    `,
    variables: {
      drt,
    },
  }),
};

exports.getUserIDBy = async (login_name, email, drt) => {
  let operation;

  if (login_name) {
    operation = getQueriesOperations.userIDByLogin(login_name);
  } else if (email) {
    operation = getQueriesOperations.userIdByEmail(email);
  } else if (drt) {
    operation = getQueriesOperations.userIdByEmail(drt);
  }

  const data = await gqlClient.query(operation);
  if (!data.users[0]) {
    return null;
  }

  return data.users[0].id;
};

exports.verifyPassword = async (id, password) => {
  const operation = {
    query: gql`
      query($id: uuid) {
        users(where: { id: { _eq: $id } }) {
          psw
        }
      }
    `,
    variables: {
      id,
    },
  };

  const data = await gqlClient.query(operation);

  if (!data.users[0]) {
    return null;
  }

  return password === data.users[0].psw;
};
