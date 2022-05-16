import axios from 'axios';

const saveSale = async (bodySale) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3001/sales',
    data: bodySale,
  });

  return response.data;
};

export default saveSale;
