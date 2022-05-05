const rescue = require('express-rescue');
const { getUserByEmail, getUserByName } = require('../services/usersService');
const generateError = require('../utilities/generateError');
const registerSchema = require('../schemas/registerSchema');

const validateSchema = rescue(async (req, _res, next) => {
  const { name, email, password } = req.body;
  const { error } = registerSchema.validate({ name, email, password });
  if (error) throw generateError(error.details[0].message, 400);
  next();
});

const validateName = rescue(async (req, _res, next) => {
  const { name } = req.body;
  const user = await getUserByName(name);
  if (user) throw generateError('Name already exists', 409);
  next();
});

const validateUser = rescue(async (req, _res, next) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (user) throw generateError('User already exists', 409);
  next();
});

module.exports = [
  validateSchema,
  validateName,
  validateUser,
];