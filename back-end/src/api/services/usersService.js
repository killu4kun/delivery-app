const { User } = require('../../database/models');

const getUserByEmail = async (email) =>
  User.findOne({ where: { email }, attributes: { exclude: ['password'] } });

module.exports = {
  getUserByEmail,
};
