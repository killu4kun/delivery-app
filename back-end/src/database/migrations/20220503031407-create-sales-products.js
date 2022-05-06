'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    const standard = (type) => ({ type, allowNull: false });

    await queryInterface.createTable('salesProducts', {
      sale_id: { ...standard(INTEGER), primaryKey: true, references: { model: 'sales', key: 'id' } },
      product_id: {...standard(INTEGER), primaryKey: true, references: { model: 'products', key: 'id' } },
      quantity: standard(INTEGER),
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};