const rescue = require('express-rescue');
const { getUserByEmail } = require('../services/usersService');
const { errorResponse } = require('../utilities/generateResponse');
const loginSchema = require('../schemas/loginSchema');

const validateSchema = rescue(async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  if (error) errorResponse(res, 'badRequest', error.details[0].message);
  next();
});

const validateUser = rescue(async (req, res, next) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (!user) errorResponse(res, 'notFound', 'User');
  next();
});

module.exports = [
  validateSchema,
  validateUser,
];