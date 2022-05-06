const rescue = require('express-rescue');
const { getUserById } = require('../services/usersService');
const { readOne } = require('../services/salesService');
const { userNotFound, sellerNotFound } = require('../errors/requestErrors');
const salesSchema = require('../schemas/salesUpdateSchema');

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

module.exports = [validateSale, validateSaleById, validateUsersById];
