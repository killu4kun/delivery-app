const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { promises } = require('fs');
const generateError = require('../utilities/generateError');

module.exports = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) throw generateError('Token not found', 401);
  const jwtSecret = await promises.readFile('jwt.evaluation.key', 'utf8');

  jwt.verify(token, jwtSecret, { algorithm: ['HS256'] }, (err, decoded) => {
    if (err) throw generateError('Token expired or invalid', 401);
    res.locals.user = decoded.data.email;
    next();
  });
});