const errors = {
  notFound: (data) => `${data} not found`,
  internal: (data) => data.message || 'Internal server error',
  token: (data) => `Token ${data}`,
};

const codes = {
  ok: 200,
  create: 201,
  badRequest: 400,
  token: 401,
  notFound: 404,
  internal: 500,
};

const errorResponse = (res, key, data) => {
  const code = codes[key];
  const error = key === 'badRequest' ? data : errors[key](data);
  return res.status(code).json({ error });
};

const successResponse = (res, key, json) => {
  const code = codes[key];
  return res.status(code).json(json);
};

module.exports = {
  errorResponse,
  successResponse,
};