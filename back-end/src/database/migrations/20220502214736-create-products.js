'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DECIMAL } = Sequelize;
    const standard = (type) => ({ type, allowNull: false });

    await queryInterface.createTable('products', {
      id: { ...standard(INTEGER), primaryKey: true, autoIncrement: true },
      name: { ...standard(STRING(100)), unique: true },
      price: standard(DECIMAL(4, 2)),
      url_image: { ...standard(STRING(200)), defaultValue: '' },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
  }
};