const { User } = require('../../database/models');

const getUserByEmail = async (email) =>
  User.findOne({ where: { email }, attributes: { exclude: ['password'] } });

const getUserByEmailAndPassword = async (email, password) =>
  User.findOne({ where: { email, password }, attributes: { exclude: ['password'] } });

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
};