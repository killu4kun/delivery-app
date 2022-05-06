const rescue = require('express-rescue');
const { getUserById } = require('../services/usersService');
const { userNotFound, sellerNotFound } = require('../errors/requestErrors');
const salesSchema = require('../schemas/salesSchema');

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

module.exports = [validateSale, validateUsersById];
