const Joi = require('joi');
const { requiredString, invalidString } = require('../errors/requestErrors');

module.exports = Joi.object({
  name: Joi
    .string()
    .min(12)
    .max(100)
    .required()
    .error(requiredString('name', 12, 100)),

  email: Joi
    .string()
    .email()
    .required()
    .error(requiredString('email')),

  password: Joi
    .string()
    .min(6)
    .max(32)
    .required()
    .error(requiredString('password', 6, 32)),

  role: Joi
    .string()
    .max(20)
    .error(invalidString('role', 0, 20)),
});