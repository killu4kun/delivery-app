'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DECIMAL, DATE } = Sequelize;
    const standard = (type) => ({ type, allowNull: false });
    const references = { model: 'users', key: 'id' };

    await queryInterface.createTable('sales', {
      id: { ...standard(INTEGER), primaryKey: true, autoIncrement: true },
      userId: {...standard(INTEGER), references },
      sellerId: { ...standard(INTEGER), references },
      totalPrice: standard(DECIMAL(9, 2)),
      deliveryAddress: standard(STRING(100)),
      deliveryNumber: standard(STRING(50)),
      saleDate: standard(DATE),
      status: standard(STRING(50)),
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};