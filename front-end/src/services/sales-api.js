import axios from 'axios';

const saveSale = async (token, bodySale) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3001/sales',
    data: bodySale,
    headers: { 'authorization': token },
  });

  return response.data;
};

export default saveSale;
