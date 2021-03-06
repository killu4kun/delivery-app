const Joi = require('joi');
const {
  requiredInteger,
  requiredString,
  requiredCurrency,
  requiredDate,
  productIdIsRequired,
  productQuantityIsRequired,
} = require('../errors/errorsTemplate');

module.exports = Joi.object({
  userId: Joi.number().integer().required().error(requiredInteger('userId')),

  sellerId: Joi.number()
    .integer()
    .required()
    .error(requiredInteger('sellerId')),

  totalPrice: Joi.number()
    .required()
    .precision(2)
    .error(requiredCurrency('totalPrice')),

  deliveryAddress: Joi.string()
    .required()
    .max(100)
    .error(requiredString('deliveryAddress', 0, 100)),

  deliveryNumber: Joi.string()
    .required()
    .max(50)
    .error(requiredString('deliveryNumber', 0, 50)),

  saleDate: Joi.date().required().error(requiredDate('saleDate')),

  status: Joi.string()
    .required()
    .max(50)
    .error(requiredString('status', 0, 50)),

  role: Joi.string()
    .required(),

  products: Joi.array().items(
    Joi.object({
      productId: Joi.number().required().error(productIdIsRequired),
      name: Joi.string(),
      quantity: Joi.number().required().error(productQuantityIsRequired),
      unitPrice: Joi.number().precision(2),
      subtotal: Joi.number().precision(2),
    }),
  ),
});
