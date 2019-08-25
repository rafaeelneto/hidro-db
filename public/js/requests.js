import axios from 'axios';

const dashboardBase = '/dashboard';
const gisURL = '/gis'

async function makeSimpleGetRequest(base, url) {
    try {
      const response = await axios.get(base + url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

async function loadInfo(base, url, query){
  try {
    console.log(base + url + query)
    const response = await axios.get(base + url + query);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
    makeSimpleGetRequest,
    loadInfo,
    dashboardBase,
    gisURL
}