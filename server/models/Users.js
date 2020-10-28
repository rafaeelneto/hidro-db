const bcrypt = require('bcryptjs');
const gql = require('graphql-tag');

const gqlClient = require('../graph-client/client');
const AppError = require('../utils/appError');

const fragments = {
  userId: {
    query: gql`
      fragment userId on users {
        id
      }
    `,
    name: 'userId',
  },
  userLogin: {
    query: gql`
      fragment userLogin on users {
        nome
        email
        scope
        userOnRoles {
          role {
            nome
          }
        }
      }
    `,
    name: 'userLogin',
  },
  userCheckToken: {
    query: gql`
      fragment userCheckToken on users {
        id
        psw_changed_at
      }
    `,
    name: 'userCheckToken',
  },
  userRefreshToken: {
    query: gql`
      fragment userRefreshToken on users {
        id
        psw_changed_at
        refresh_token
        nome
        email
        scope
        userOnRoles {
          role {
            nome
          }
        }
      }
    `,
    name: 'userRefreshToken',
  },
};

exports.fragments = fragments;

const queriesOperations = {
  userIDByLogin: (login_name) => ({
    query: gql`
      query($login_name: String) {
        users(where: { login_name: { _eq: $login_name } }) {
          ...userId
        }
      }
      ${fragments.userId.query}
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
  userIdByDrt: (drt) => ({
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
  userByID: (id, fragment) => ({
    query: gql`
    query($id: uuid) {
      users(where: { id: { _eq: $id } }) {
        ...${fragment.name}
      }
    }
    ${fragment.query}
    `,
    variables: {
      id,
    },
  }),
};

const mutationsOperations = {
  newUser: (user) => ({
    object: {
      query: gql`
        mutation createUser($user: users_insert_input!) {
          insert_users_one(object: $user) {
            id
            nome
            email
          }
        }
      `,
      variables: {
        user,
      },
    },
    name: 'insert_users_one',
  }),
  setRefleshToken: (id, token) => ({
    object: {
      query: gql`
        mutation setRefreshToken(
          $user: users_set_input!
          $pk: users_pk_columns_input!
        ) {
          update_users_by_pk(_set: $user, pk_columns: $pk) {
            refresh_token
          }
        }
      `,
      variables: {
        user: {
          refresh_token: token,
        },
        pk: {
          id,
        },
      },
    },
    name: 'update_users_by_pk',
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

  const response = await gqlClient.query(operation);

  if (response.errors) {
    return response;
  }

  return response.users[0];
};

const setUserData = async (operation, token) => {
  //Creation and insertion is made only by autheticanted users and uses the users the token to request the graphQL engine
  operation.object = {
    ...operation.object,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };

  const data = await gqlClient.query(operation.object);

  if (data.errors) {
    return data;
  }

  return data[operation.name];
};

exports.getUserIDBy = async (login_name, email, drt) => {
  let operation;

  if (login_name) {
    operation = queriesOperations.userIDByLogin(login_name);
  } else if (email) {
    operation = queriesOperations.userIdByEmail(email);
  } else if (drt) {
    operation = queriesOperations.userIdByDrt(drt);
  }

  const user = await getUserData(operation);

  if (!user || user.errors) throw new AppError('Incorrect login data', 401);

  return user.id;
};

exports.getUserByID = async (id, fragment) => {
  const user = await getUserData(queriesOperations.userByID(id, fragment));

  if (!user || user.errors) throw new AppError("User doesn' exist", 404);

  //TMP
  if (user.userOnRoles) {
    user.roles = user.userOnRoles.map((item) => item.role.nome);
  }

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

  if (!user || user.errors) throw new AppError("User doesn' exist", 404);

  return await bcrypt.compare(password, user.psw);
};

exports.createUser = async (created_by, newUser, token) => {
  if (newUser.psw !== newUser.pswConfirm) {
    throw new AppError('Passwords are not the same', 400);
  }
  newUser.psw = await bcrypt.hash(newUser.psw, 12);
  newUser.created_by = created_by;
  newUser.userOnRoles = {
    data: newUser.roles.map((id) => {
      return {
        role_id: id,
      };
    }),
  };
  delete newUser.roles;
  delete newUser.pswConfirm;

  const operation = mutationsOperations.newUser(newUser);

  const user = await setUserData(operation, token);

  if (!user || user.errors) {
    return user;
  }

  return user;
};

exports.saveRefreshToken = async (id, refreshToken, authToken) => {
  const operation = mutationsOperations.setRefleshToken(id, refreshToken);

  const result = await setUserData(operation, authToken);
  if (!result || result.errors)
    throw new AppError('Error on generate token', 500);

  return result.refresh_token;
};
