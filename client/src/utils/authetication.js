import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import { fetchPost, ENDPOINTS } from './fetchRestful';
import { tokenVar, tokenExpiresInVar } from '../graphql/cache';

//TRY TO MAKE THE SILENT REFRESH OF THE AUTHETICATION TOKEN
const refreshToken = () => {};

//MAKE THE LOGIN REQUEST TO NODE SERVER TO AUTHETICATE USER
export const autheticate = async (login_credetials, password) => {
  const userInfo = JSON.stringify({
    login_id: 'rafaeelneto',
    password: 'miaaaau',
  });

  try {
    const res = await fetchPost(ENDPOINTS.USER_LOGIN_API, userInfo);
    const { token } = await res.json();

    if (token) {
    }

    //DECODE TOKEN
    const decodedToken = jwt.decode(token);

    //SAVE TOKEN TO LOCAL STATE CACHE
    tokenVar(token);
    tokenExpiresInVar('');

    console.log(tokenVar());

    console.log(decodedToken);

    return decodedToken;
  } catch (err) {
    console.log(err);
  }
};

const logout = () => {};

//STORE THE TOKEN INTO THE STATE OF THE APPLICATION
const storeToken = (token) => {};

//SET TIMER TO SILENT REFRESH
const setSilentRefresh = () => {};
