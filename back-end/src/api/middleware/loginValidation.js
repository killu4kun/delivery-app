const rescue = require('express-rescue');
const { getUserByEmail, getUserByEmailAndPassword } = require('../services/usersService');
const { errorResponse } = require('../utilities/generateResponse');
const loginSchema = require('../schemas/loginSchema');

const validateSchema = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  if (error) return errorResponse(res, 'badRequest', error.details[0].message);
  next();
});

const validateUser = rescue(async (req, res, next) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (!user) return errorResponse(res, 'notFound', 'User');
  res.locals.user = user;
  next();
});

const validatePassword = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await getUserByEmailAndPassword(email, password);
  if (!user) return errorResponse(res, 'badRequest', 'Wrong password');
  next();
});

module.exports = [
  validateSchema,
  validatePassword,
  validateUser,
];