import axios from 'axios';
const apiBaseURL = 'http://localhost:4000';

export const GET = (table) => {
  return axios.get(`${apiBaseURL}/${table}`);
};

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const POST = (table, bodyObj) => {
  return axios(`${apiBaseURL}/${table}`, {
    method: 'POST',
    headers: headers,
    bodyObj,
  });
};
