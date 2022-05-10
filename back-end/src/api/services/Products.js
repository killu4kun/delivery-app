const { Product } = require('../../database/models');
const { productNotFound } = require('../errors/productErros');

module.exports = {
  getAll: async () => Product.findAll(),

  getById: async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw productNotFound;
    return product;
  },
};
