const { internalServerError } = require('../errors/errorsTemplate');

module.exports = (err, _req, res, _next) => {
  const status = err.status || internalServerError.status;
  const error = err.message || internalServerError.message;
  res.status(status).json({ error });
};