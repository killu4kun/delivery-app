const jwt = require('jsonwebtoken');
const { promises } = require('fs');

module.exports = async (email, password, role) => {
  const jwtSecret = await promises.readFile('jwt.evaluation.key', 'utf8');
  const jwtConfig = { expiresIn: '30d', algorithm: 'HS256' };
  return jwt.sign({ data: { email, password, role } }, jwtSecret, jwtConfig);
};