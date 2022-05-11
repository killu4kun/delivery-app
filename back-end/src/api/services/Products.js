const { Product } = require('../../database/models');
const { idNotFound } = require('../errors/errorsTemplate');

module.exports = {
  getAll: async () => Product.findAll(),

  getById: async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw idNotFound('product');
    return product;
  },
};
