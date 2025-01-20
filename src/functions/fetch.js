/**
 * Gets data from the database.
 *
 * @param {string} table The table of the database.
 * @returns {object} data.
 */
import axios from 'axios';
const apiBaseURL = 'http://localhost:4000';

export const GET = (table) => {
  return axios.get(`${apiBaseURL}/${table}`);
};
