import jwt from 'jsonwebtoken';
import { format, formatDistance, differenceInMinutes } from 'date-fns';

import { fetchPost, ENDPOINTS } from './fetchRestful';
import {
  tokenVar,
  tokenExpiresInVar,
  userLoggedInVar,
  userVisitanteVar,
} from '../graphql/cache';

//SAVE AUTHETICATION INFO AND SET SILENT REFRESH
const saveAutheticationInfo = async (token) => {
  //DECODE TOKEN
  const decodedToken = jwt.decode(token);

  console.log(token);
  const expiresIn =
    new Date(decodedToken.exp * 1000).getTime() - new Date().getTime();

  //SET TIMER TO REFRESH TOKEN 2s BEFORE IT EXPIRES
  setSilentRefreshTimer(expiresIn - 5000);

  //SAVE TOKEN TO LOCAL STATE CACHE AND USER LOGGED VARIABLE
  tokenVar(token);
  tokenExpiresInVar(expiresIn);
  userLoggedInVar(true);
  userVisitanteVar(false);

  return true;
};

//TRY TO MAKE THE SILENT REFRESH OF THE AUTHETICATION TOKEN
export const refreshToken = async () => {
  try {
    const res = await fetchPost(
      ENDPOINTS.SILENT_REFRESH_API,
      JSON.stringify({})
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

//MAKE THE LOGIN REQUEST TO NODE SERVER TO AUTHETICATE USER
export const autheticate = async (login_id, password) => {
  const userInfo = JSON.stringify({
    login_id: 'rafaeelneto',
    password: 'miaaaau',
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

const logout = () => {
  tokenVar('');
  tokenExpiresInVar('');
  userLoggedInVar(false);

  //CALL THE REDIRECTION TO LOGIN PAGE
};

//SET TIMER TO SILENT REFRESH
const setSilentRefreshTimer = (time) => {
  setTimeout(() => {
    console.log('SILENT REFRESH');
    refreshToken();
  }, time);
};
