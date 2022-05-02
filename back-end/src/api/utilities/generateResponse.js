const errors = {
  notFound: (type) => `${type} not found`,
  internal: (type) => type.message || 'Internal server error',
};

const codes = {
  login: 200,
  read: 200,
  create: 201,
  joi: 400,
  notFound: 404,
  internal: 500,
};

const errorResponse = (res, key, type) => {
  const code = codes[key];
  const error = key === 'joi' ? type.details[0].message : errors[key](type);
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
