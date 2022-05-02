"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, STRING } = Sequelize;
    const standard = { type: STRING, allowNull: false };

    await queryInterface.createTable("users", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: standard,
      email: standard,
      password: standard,
      role: standard,
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("users");
  },
};