const axios = require('axios');

const registerFetch = async ({ name, email, password }) => {
  const register = await axios.post('http://localhost:3001/register',
    {
      name, email, password,
    });
  return register;
};

export default registerFetch;
