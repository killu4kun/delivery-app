const contentType = 'application/json; charset=utf-8';

const requestUser = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: JSON.stringify({ email, password }),
  };
  const user = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/login`, options)
    .then((response) => response.json())
    .then((data) => data);

  return user;
};

const createUser = async (name, email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body: JSON.stringify({ name, password, email }),
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/register`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

const requestProducts = async (token) => {
  const reqHeaders = new Headers();
  reqHeaders.append('Authorization', token);
  reqHeaders.append('Content-Type', contentType);
  const options = {
    method: 'GET',
    headers: reqHeaders,
  };
  const results = await fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT || '3001'}/products`, options)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

function validateData(name, email, password) {
  const nameLength = 12;
  const passLength = 6;

  if (name.length < nameLength) return true;

  if (!email.match(/\S+@\S+\.\S+/)) return true;

  if (password.length < passLength) return true;

  return false;
}

export {
  requestUser,
  createUser,
  requestProducts,
  validateData,
};
