export const ENDPOINTS = {
  USER_LOGIN_API: 'http://localhost/v1/api/user/login',
  SILENT_REFRESH_API: 'http://localhost/v1/api/user/refresh_token',
};
export const fetchPost = async (endpoint, body) => {
  const fetchRes = await fetch(endpoint, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc
    mode: 'cors', // no-cors, *cors, same-origin
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body, // body data type must match "Content-Type" header
  });

  return fetchRes;
};
