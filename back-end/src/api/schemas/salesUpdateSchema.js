const Joi = require('joi');
const {
  invalidString,
  invalidInteger,
  invalidCurrency,
  invalidDate,
  productIdIsInvalid,
  productQuantityIsInvalid,
} = require('../errors/errorsTemplate');

module.exports = Joi.object({
  userId: Joi.number().integer().error(invalidInteger('userId')),

  sellerId: Joi.number().integer().error(invalidInteger('sellerId')),

  totalPrice: Joi.number().precision(2).error(invalidCurrency('totalPrice')),

  deliveryAddress: Joi.string()
    .max(100)
    .error(invalidString('deliveryAddress', 0, 100)),

  deliveryNumber: Joi.string()
    .max(50)
    .error(invalidString('deliveryNumber', 0, 50)),

  saleDate: Joi.date().error(invalidDate('saleDate')),

  status: Joi.string().max(50).error(invalidString('status', 0, 50)),
  products: Joi.array().items(
    Joi.object({
      id: Joi.number().error(productIdIsInvalid),
      name: Joi.string(),
      quantity: Joi.number().error(productQuantityIsInvalid),
      price: Joi.number().precision(2),
    }),
  ),
});
