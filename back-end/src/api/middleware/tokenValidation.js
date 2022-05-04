const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { promises } = require('fs');
const { errorResponse } = require('../utilities/generateResponse');

module.exports = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return errorResponse(res, 'token', 'not found');
  const jwtSecret = await promises.readFile('jwt.evaluation.key', 'utf8') || 'secret_key';

  jwt.verify(token, jwtSecret, { algorithm: ['HS256'] }, (err, decoded) => {
    if (err) return errorResponse(res, 'token', 'expired or invalid');
    res.locals.user = decoded.data.email;
    next();
  });
});