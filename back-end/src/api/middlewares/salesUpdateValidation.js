const rescue = require('express-rescue');
const { getUserById } = require('../services/usersService');
const { readOne } = require('../services/salesService');
const { idNotFound } = require('../errors/errorsTemplate');
const salesSchema = require('../schemas/salesUpdateSchema');
const Product = require('../services/Products');

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
    if (!user) throw idNotFound('user');
  }
};

const validateSellerId = async (sellerId) => {
  if (sellerId) {
    const seller = await getUserById(sellerId);
    if (!seller) throw idNotFound('seller');
  }
};

const validateUsersById = rescue(async (req, _res, next) => {
  const { userId, sellerId } = req.body;
  await validateUserId(userId);
  await validateSellerId(sellerId);
  next();
});

// refatorar usando Promise.All()
// refatorar mensagem com especificação de id
const validateProductsById = rescue(async (req, _res, next) => {
  const { products } = req.body;
  if (!products.length) {
    const db = await Product.getAll();
    const dbIds = db.map((product) => product.id);
    products.forEach((product) => {
      const error = dbIds.includes(product.id);
      if (!error) next(idNotFound('product'));
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
