const rescue = require('express-rescue');
const { getUserById } = require('../services/usersService');
const Product = require('../services/Products');
const { userNotFound, sellerNotFound } = require('../errors/requestErrors');
const salesSchema = require('../schemas/salesSchema');
const { productNotFound } = require('../errors/productErros');

const validateSale = rescue(async (req, _res, next) => {
  await salesSchema.validateAsync(req.body);
  next();
});

const validateUsersById = rescue(async (req, _res, next) => {
  const { userId, sellerId } = req.body;
  const user = await getUserById(userId);
  if (!user) throw userNotFound;
  const seller = await getUserById(sellerId);
  if (!seller) throw sellerNotFound;
  next();
});

const validateProductsById = rescue(async (req, _res, next) => {
  const { products } = req.body;
  const db = await Product.getAll();
  const dbIds = db.map((product) => product.id);
  products.forEach((product) => {
    const error = dbIds.includes(product.id);
    if (!error) next(productNotFound);
  });
  next();
});

module.exports = [validateSale, validateUsersById, validateProductsById];
