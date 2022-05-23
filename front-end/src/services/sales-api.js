import axios from 'axios';

export const saveSale = async (token, bodySale) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:3001/sales',
    data: bodySale,
    headers: { Authorization: token },
  });

  return response.data;
};

export const getSalesUser = async (id) => {
  const response = await axios.get(`http://localhost:3001/sales/userid/${id}`);
  return response.data;
};

export const getSaleId = async (id) => {
  const response = await axios.get(`http://localhost:3001/sales/${id}`);
  return response.data;
};
