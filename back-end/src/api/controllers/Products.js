const rescue = require('express-rescue');
const service = require('../services/Products');
const generateError = require('../utilities/generateError');

module.exports = {
  getAllProducts: rescue(async (req, res) => {
    const products = await service.getAll();
    return res.status(200).json(products);
  }),
  getProductsById: rescue(async (req, res) => {
    const { id } = req.params;
    const product = await service.getById(id);
    if (product) res.status(200).json({ product });
    else throw generateError('Product not found', 404);
  }),
};
