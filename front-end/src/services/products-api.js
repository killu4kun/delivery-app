import axios from 'axios';

const productsFetch = async () => {
  const register = await axios.get('http://localhost:3001/products');
  return register;
};

export default productsFetch;
