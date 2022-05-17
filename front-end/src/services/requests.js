import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const { email, password } = body;
  const { data } = await api.post(endpoint, { email, password });
  return data;
};

export const requestUsers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const createUser = async (endpoint, body) => {
  try {
    await api.post(endpoint, body);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const fetchSalesById = async (endpoint) => {
  try {
    const { data } = await api.get(endpoint);

    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const createSale = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getDrinks = async (endpoint) => api.get(endpoint);
