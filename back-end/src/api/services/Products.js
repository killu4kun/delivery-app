const { Product } = require('../../database/models');

module.exports = {
  getAll: async () => Product.findAll(),
  
  getById: async (id) => Product.findOne({ where: { id } }),
};