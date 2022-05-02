const errors = {
  notFound: (data) => `${data} not found`,
  internal: (data) => data.message || 'Internal server error',
};

const codes = {
  ok: 200,
  create: 201,
  badRequest: 400,
  notFound: 404,
  internal: 500,
};

const errorResponse = (res, key, data) => {
  const code = codes[key];
  const error = key === ('notFound' || 'internal') ? errors[key](data) : data;
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