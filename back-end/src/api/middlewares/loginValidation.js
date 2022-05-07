const rescue = require('express-rescue');
const { getUserByEmail, getUserByEmailAndPassword } = require('../services/usersService');
const loginSchema = require('../schemas/loginSchema');
const { idNotFound, wrongPassword } = require('../errors/errorsTemplate');

const validateSchema = rescue(async (req, _res, next) => {
  await loginSchema.validateAsync(req.body);
  next();
});

const validateUser = rescue(async (req, res, next) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (!user) throw idNotFound('user');
  res.locals.user = user;
  next();
});

const validatePassword = rescue(async (req, _res, next) => {
  const { email, password } = req.body;
  const user = await getUserByEmailAndPassword(email, password);
  if (!user) throw wrongPassword;
  next();
});

module.exports = [
  validateSchema,
  validateUser,
  validatePassword,
];