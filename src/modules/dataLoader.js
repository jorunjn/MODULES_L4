const axios = require('axios');

async function loadUsers() {
  const result = { data: [], isLoading: true, error: null };
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    result.data = response.data;
    result.isLoading = false;
  } catch (err) {
    result.error = err;
    result.isLoading = false;
  }
  return result;
}

module.exports = { loadUsers };
