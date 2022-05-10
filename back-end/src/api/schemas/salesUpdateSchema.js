const Joi = require('joi');
const {
  userIdIsInvalid,
  sellerIdIsInvalid,
  totalPriceIsInvalid,
  deliveryAddressIsInvalid,
  deliveryNumberIsInvalid,
  saleDateIsInvalid,
  statusIsInvalid,
  productIdIsInvalid,
  productQuantityIsInvalid,
} = require('../errors/requestErrors');

module.exports = Joi.object({
  userId: Joi.number().error(userIdIsInvalid),
  sellerId: Joi.number().error(sellerIdIsInvalid),
  totalPrice: Joi.number().precision(2).error(totalPriceIsInvalid),
  deliveryAddress: Joi.string().max(100).error(deliveryAddressIsInvalid),
  deliveryNumber: Joi.string().max(50).error(deliveryNumberIsInvalid),
  saleDate: Joi.date().error(saleDateIsInvalid),
  status: Joi.string().max(50).error(statusIsInvalid),
  products: Joi.array().items(
    Joi.object({
      id: Joi.number().error(productIdIsInvalid),
      name: Joi.string(),
      quantity: Joi.number().error(productQuantityIsInvalid),
      price: Joi.number().precision(2),
    }),
  ),
});
