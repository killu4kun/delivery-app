const jwt = require('jsonwebtoken');
const { promises } = require('fs');

module.exports = async (email, password) => {
  const jwtSecret = await promises.readFile('jwt.evaluation.key', 'utf8') || 'secret_key';
  const jwtConfig = { expiresIn: '30d', algorithm: 'HS256' };
  return jwt.sign({ data: { email, password } }, jwtSecret, jwtConfig);
};