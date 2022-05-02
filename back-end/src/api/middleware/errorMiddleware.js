const { errorResponse } = require('../utilities/generateResponse');

module.exports = (err, _req, res, _next) => {
  errorResponse(res, 'internal', err);
};