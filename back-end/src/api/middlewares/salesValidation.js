const rescue = require('express-rescue');
const { getUserById } = require('../services/usersService');
const { idNotFound } = require('../errors/errorsTemplate');
const salesSchema = require('../schemas/salesSchema');

const validateSale = rescue(async (req, _res, next) => {
  await salesSchema.validateAsync(req.body);
  next();
});

const validateUsersById = rescue(async (req, _res, next) => {
  const { userId, sellerId } = req.body;
  const user = await getUserById(userId);
  if (!user) throw idNotFound('user');
  const seller = await getUserById(sellerId);
  if (!seller) throw idNotFound('seller');
  next();
});

module.exports = [validateSale, validateUsersById];