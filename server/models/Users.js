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
  userLoginByID: (id) => ({
    query: gql`
      query($id: uuid) {
        users(where: { id: { _eq: $id } }) {
          nome
          email
          scope
          userOnRoles {
            role {
              nome
            }
          }
        }
      }
    `,
    variables: {
      id,
    },
  }),
};

const getUserData = async (operation) => {
  //Simple user information role is set to default admin-secret
  operation = {
    ...operation,
    context: {
      headers: {
        'X-Hasura-Admin-Secret': 'myadminsecretkey',
      },
    },
  };

  const data = await gqlClient.query(operation);

  if (!data.users[0]) {
    return null;
  }

  return data.users[0];
};

const setUserData = (operation, token) => {
  //Creation and insertion is made only by autheticanted users and uses the users the token to request the graphQL engine
  operation = {
    ...operation,
    context: {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    },
  };

  const data = await gqlClient.query(operation);

  if (!data.users[0]) {
    return null;
  }

  return data.users[0];
} 

exports.getUserIDBy = async (login_name, email, drt) => {
  let operation;

  if (login_name) {
    operation = getQueriesOperations.userIDByLogin(login_name);
  } else if (email) {
    operation = getQueriesOperations.userIdByEmail(email);
  } else if (drt) {
    operation = getQueriesOperations.userIdByDrt(drt);
  }

  const user = await getUserData(operation);

  if (!user) return null;

  return user.id;
};

exports.getUserByID = async (id) => {
  const operation = getQueriesOperations.userLoginByID(id);

  const user = await getUserData(operation);

  if (!user) return null;

  user.roles = user.userOnRoles.map((item) => item.role.nome);

  return user;
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

  const user = await getUserData(operation);

  return password === user.psw;
};

exports.createUser = (newUser, token) => {
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

  const user = await setUserData(operation, token);

  return password === user.psw;
};
