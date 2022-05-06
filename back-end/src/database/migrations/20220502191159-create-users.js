"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    const standard = (type) => ({ type, allowNull: false });

    await queryInterface.createTable("users", {
      id: { ...standard(INTEGER), primaryKey: true, autoIncrement: true },
      name: standard(STRING(100)),
      email: { ...standard(STRING(100)), unique: true },
      password: standard(STRING(32)),
      role: standard(STRING(20)),
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("users");
  },
};