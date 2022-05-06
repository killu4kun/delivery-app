const Joi = require('joi');
const {
  userIdIsInvalid,
  sellerIdIsInvalid,
  totalPriceIsInvalid,
  deliveryAddressIsInvalid,
  deliveryNumberIsInvalid,
  saleDateIsInvalid,
  statusIsInvalid,
} = require('../errors/requestErrors');

module.exports = Joi.object({
  userId: Joi.number().error(userIdIsInvalid),
  sellerId: Joi.number().error(sellerIdIsInvalid),
  totalPrice: Joi.number().precision(2).error(totalPriceIsInvalid),
  deliveryAddress: Joi.string().max(100).error(deliveryAddressIsInvalid),
  deliveryNumber: Joi.string().max(50).error(deliveryNumberIsInvalid),
  saleDate: Joi.date().error(saleDateIsInvalid),
  status: Joi.string().max(50).error(statusIsInvalid),
});
