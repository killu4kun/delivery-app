const Joi = require('joi');
const { requiredString, requiredEmail } = require('../errors/errorsTemplate');

module.exports = Joi.object({
  email: Joi
    .string()
    .email()
    .required()
    .error(requiredEmail),

  password: Joi
    .string()
    .min(6)
    .max(32)
    .required()
    .error(requiredString('password', 6, 32)),
});