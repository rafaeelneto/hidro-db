import jwt from 'jsonwebtoken';
import { format, formatDistance, differenceInMinutes } from 'date-fns';

import { fetchPost, ENDPOINTS } from './fetchRestful';
import {
  tokenVar,
  tokenExpiresInVar,
  userLoggedInVar,
  userVisitanteVar,
  userInfoVar,
} from '../graphql/cache';

// SAVE AUTHETICATION INFO AND SET SILENT REFRESH
const saveAutheticationInfo = (token) => {
  // DECODE TOKEN
  const decodedToken = jwt.decode(token);
  const expiresIn =
    new Date(decodedToken.exp * 1000).getTime() - new Date().getTime();

  // SET TIMER TO REFRESH TOKEN 5s BEFORE IT EXPIRES
  // eslint-disable-next-line no-use-before-define
  setSilentRefreshTimer(expiresIn - 5000);

  // SAVE TOKEN TO LOCAL STATE CACHE AND USER LOGGED VARIABLE
  const { id, role } = decodedToken;

  userInfoVar({ id, role });
  tokenVar(token);
  tokenExpiresInVar(expiresIn);
  userLoggedInVar(true);
  userVisitanteVar(false);

  return true;
};

// TRY TO MAKE THE SILENT REFRESH OF THE AUTHETICATION TOKEN
export const refreshToken = async () => {
  try {
    const res = await fetchPost(
      ENDPOINTS.SILENT_REFRESH_API,
      JSON.stringify({}),
    );
    const { token } = await res.json();

    if (!token) {
      throw new Error('Error on authetication');
    }

    saveAutheticationInfo(token);

    return true;
  } catch (err) {
    console.log(err);
    logout();
    return false;
  }
};

// MAKE THE LOGIN REQUEST TO NODE SERVER TO AUTHETICATE USER
export const autheticate = async (login_id, password) => {
  const userInfo = JSON.stringify({
    login_id,
    password,
  });

  try {
    const res = await fetchPost(ENDPOINTS.USER_LOGIN_API, userInfo);
    const { token } = await res.json();

    if (!token) {
      throw new Error('Error on authetication');
    }

    saveAutheticationInfo(token);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const logout = () => {
  tokenVar(null);
  tokenExpiresInVar(null);
  userLoggedInVar(false);
};

// SET TIMER TO SILENT REFRESH
const setSilentRefreshTimer = (time) => {
  setTimeout(() => {
    console.log('SILENT REFRESH');
    refreshToken();
  }, time);
};
