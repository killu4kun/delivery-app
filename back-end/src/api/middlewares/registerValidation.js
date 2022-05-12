const rescue = require('express-rescue');
const { getUserByEmail, getUserByName } = require('../services/usersService');
const registerSchema = require('../schemas/registerSchema');
const tokenValidation = require('./tokenValidation');
const { cannotDuplicate, permissionDenied } = require('../errors/errorsTemplate');

const validateSchema = rescue(async (req, _res, next) => {
  registerSchema.validateAsync(req.body);
  next();
});

const validateName = rescue(async (req, _res, next) => {
  const user = await getUserByName(req.body.name);
  if (user) throw cannotDuplicate('name');
  next();
});

const validateUser = rescue(async (req, res, next) => {
  const user = await getUserByEmail(req.body.email);
  if (user) throw cannotDuplicate('user');
  res.locals.user = user;
  next();
});

const validateToken = rescue(async (req, res, next) => {
  if (req.body.role && res.locals.decoded.role !== 'administrator') throw permissionDenied;
  next();
});

module.exports = [
  validateSchema,
  validateName,
  validateUser,
  tokenValidation,
  validateToken,
];