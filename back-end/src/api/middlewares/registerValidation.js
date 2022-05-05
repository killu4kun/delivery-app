const rescue = require('express-rescue');
const { getUserByEmail } = require('../services/usersService');
const generateError = require('../utilities/generateError');
const registerSchema = require('../schemas/registerSchema');

const validateSchema = rescue(async (req, _res, next) => {
  const { name, email, password, role } = req.body;
  const { error } = registerSchema.validate({ name, email, password, role });
  if (error) throw generateError(error.details[0].message, 400);
  next();
});

const validateUser = rescue(async (req, _res, next) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (user) throw generateError('User already exists', 400);
  next();
});

module.exports = [
  validateSchema,
  validateUser,
];