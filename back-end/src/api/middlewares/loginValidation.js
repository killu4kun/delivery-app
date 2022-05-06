const rescue = require('express-rescue');
const { getUserByEmail, getUserByEmailAndPassword } = require('../services/usersService');
const generateError = require('../utilities/generateError');
const loginSchema = require('../schemas/loginSchema');

const validateSchema = rescue(async (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  if (error) throw generateError(error.details[0].message, 400);
  next();
});

const validateUser = rescue(async (req, res, next) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (!user) throw generateError('User not found', 404);
  res.locals.user = user;
  next();
});

const validatePassword = rescue(async (req, _res, next) => {
  const { email, password } = req.body;
  const user = await getUserByEmailAndPassword(email, password);
  if (!user) throw generateError('Wrong password', 400);
  next();
});

module.exports = [
  validateSchema,
  validateUser,
  validatePassword,
];