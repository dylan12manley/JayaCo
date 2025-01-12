import axios from 'axios';
const apiBaseURL = 'http://localhost:4000';

export const GET = (table) => {
  return axios.get(`${apiBaseURL}/${table}`);
};

// if need for headers etc.

const headers = 'some headers';

export const POST = (table, bodyObj) => {
  return axios(`${apiBaseURL}/${table}`, {
    method: 'POST',
    headers,
    bodyObj,
  });
};
