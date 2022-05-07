const Joi = require('joi');
const {
  invalidString,
  invalidInteger,
  invalidCurrency,
  invalidDate,
} = require('../errors/requestErrors');

module.exports = Joi.object({
  userId: Joi
    .number()
    .integer()
    .error(invalidInteger('userId')),

  sellerId: Joi
    .number()
    .integer()
    .error(invalidInteger('sellerId')),

  totalPrice: Joi
    .number()
    .precision(2)
    .error(invalidCurrency('totalPrice')),

  deliveryAddress: Joi
    .string()
    .max(100)
    .error(invalidString('deliveryAddress', 0, 100)),

  deliveryNumber: Joi
    .string()
    .max(50)
    .error(invalidString('deliveryNumber', 0, 50)),

  saleDate: Joi
    .date()
    .error(invalidDate('saleDate')),

  status: Joi
    .string()
    .max(50)
    .error(invalidString('status', 0, 50)),
});