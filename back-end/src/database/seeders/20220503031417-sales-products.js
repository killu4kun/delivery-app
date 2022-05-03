'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales-products',
      [],
      { timestamps: false },
    );
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales-products', null, {});
  }
};