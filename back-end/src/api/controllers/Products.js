const rescue = require('express-rescue');
const service = require('../services/Products');
const { idNotFound } = require('../errors/errorsTemplate');

module.exports = {
  getAllProducts: rescue(async (_req, res) => {
    const products = await service.getAll();
    return res.status(200).json(products);
  }),
  getProductsById: rescue(async (req, res) => {
    const { id } = req.params;
    const product = await service.getById(id);
    if (!product) throw idNotFound('product');
    res.status(200).json({ product });
  }),
};