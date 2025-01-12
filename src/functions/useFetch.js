/**
 * Posts data to the database.
 *
 * @param {string} table The table of the database.
 * @param {string} method The method of API call.
 * @param {obj} bodyObj The key/value pairs for the data to be posted. Optional
 * @returns {null} null.
 */
function useFetch(table = 'general', method = 'POST', bodyObj = {}) {
  const postData = async () => {
    fetch(`http://localhost:4000/${table}`, {
      method: method,
      body: JSON.stringify(bodyObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        console.log(response);
        if ((response.stats = 200)) {
          alert('Data has been successfully added to the database.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (method === 'POST') postData();

  return;
}

export default useFetch;
