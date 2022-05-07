const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { promises } = require('fs');
const { missingToken, invalidToken } = require('../errors/requestErrors');

module.exports = rescue(async (req, res, next) => {
  if (!req.body.role) return next();

  const token = req.headers.authorization;
  if (!token) throw missingToken;

  const jwtSecret = await promises.readFile('jwt.evaluation.key', 'utf8');
  const jwtConfig = { expiresIn: '30d', algorithm: 'HS256' };

  jwt.verify(token, jwtSecret, jwtConfig, (err, decoded) => {
    if (err) throw invalidToken;
    res.locals.decoded = decoded.data;
    next();
  });
});