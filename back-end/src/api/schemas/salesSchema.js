const Joi = require('joi');
const {
  userIdIsRequired,
  sellerIdIsRequired,
  totalPriceIsRequired,
  deliveryAddressIsRequired,
  deliveryNumberIsRequired,
  saleDateIsRequired,
  statusIsRequired,
} = require('../errors/requestErrors');

module.exports = Joi.object({
  userId: Joi.number().required().error(userIdIsRequired),
  sellerId: Joi.number().required().error(sellerIdIsRequired),
  totalPrice: Joi.number().required().precision(2).error(totalPriceIsRequired),
  deliveryAddress: Joi.string()
    .required()
    .max(100)
    .error(deliveryAddressIsRequired),
  deliveryNumber: Joi.string()
    .required()
    .max(50)
    .error(deliveryNumberIsRequired),
  saleDate: Joi.date().required().error(saleDateIsRequired),
  status: Joi.string().required().max(50).error(statusIsRequired),
});
