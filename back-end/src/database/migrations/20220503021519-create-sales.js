'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DECIMAL, DATE } = Sequelize;
    const standard = (type) => ({ type, allowNull: false });
    const references = { model: 'users', key: 'id' };

    await queryInterface.createTable('sales', {
      id: { ...standard(INTEGER), primaryKey: true, autoIncrement: true },
      user_id: {...standard(INTEGER), references },
      seller_id: { ...standard(INTEGER), references },
      total_price: standard(DECIMAL(9, 2)),
      delivery_address: standard(STRING(100)),
      delivery_number: standard(STRING(50)),
      sale_date: standard(DATE),
      status: standard(STRING(50)),
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};