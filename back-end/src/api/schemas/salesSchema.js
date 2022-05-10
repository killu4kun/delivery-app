const Joi = require('joi');
const {
  userIdIsRequired,
  sellerIdIsRequired,
  totalPriceIsRequired,
  deliveryAddressIsRequired,
  deliveryNumberIsRequired,
  saleDateIsRequired,
  statusIsRequired,
  productIdIsRequired,
  productQuantityIsRequired,
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
  products: Joi.array().items(
    Joi.object({
      id: Joi.number().required().error(productIdIsRequired),
      name: Joi.string(),
      quantity: Joi.number().required().error(productQuantityIsRequired),
      price: Joi.number().precision(2),
    }),
  ),
});
