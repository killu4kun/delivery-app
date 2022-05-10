const rescue = require('express-rescue');
const { getUserById } = require('../services/usersService');
const { readOne } = require('../services/salesService');
const { userNotFound, sellerNotFound } = require('../errors/requestErrors');
const salesSchema = require('../schemas/salesUpdateSchema');
const Product = require('../services/Products');
const { productNotFound } = require('../errors/productErros');

const validateSale = rescue(async (req, _res, next) => {
  await salesSchema.validateAsync(req.body);
  next();
});

const validateSaleById = rescue(async (req, _res, next) => {
  const { id } = req.params;
  await readOne(id);
  next();
});

const validateUserId = async (userId) => {
  if (userId) {
    const user = await getUserById(userId);
    if (!user) throw userNotFound;
  }
};

const validateSellerId = async (sellerId) => {
  if (sellerId) {
    const seller = await getUserById(sellerId);
    if (!seller) throw sellerNotFound;
  }
};

const validateUsersById = rescue(async (req, _res, next) => {
  const { userId, sellerId } = req.body;
  await validateUserId(userId);
  await validateSellerId(sellerId);
  next();
});

const validateProductsById = rescue(async (req, _res, next) => {
  const { products } = req.body;
  if (!products.length) {
    const db = await Product.getAll();
    const dbIds = db.map((product) => product.id);
    products.forEach((product) => {
      const error = dbIds.includes(product.id);
      if (!error) next(productNotFound);
    });
    next();
  }
  next();
});

module.exports = [
  validateSale,
  validateSaleById,
  validateUsersById,
  validateProductsById,
];
