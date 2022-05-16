import axios from 'axios';

const salesFetch = async (name) => {
  const sales = await axios.get(`http://localhost:3001/sales/seller/${name}`);
  return sales;
};

export default salesFetch;
