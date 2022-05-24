import axios from 'axios';

export const getUser = async (id) => {
  const response = await axios.get(`http://localhost:3001/users/${id}`);
  return response.data;
};

export const getAllUser = async (id) => {
  const response = await axios.get(`http://localhost:3001/users/`);
  return response.data;
};