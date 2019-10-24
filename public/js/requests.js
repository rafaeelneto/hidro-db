import axios from 'axios';

const dashboardBase = '/dashboard';
const infoURL = '/info'

async function makeSimpleGetRequest(base, url) {
    try {
      const response = await axios.get(base + url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

async function loadInfoQuery(base, url, query){
  try {
    
    const response = await axios.get(base + url + query);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
    makeSimpleGetRequest,
    loadInfoQuery,
    dashboardBase,
    infoURL
}