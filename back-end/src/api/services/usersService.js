const md5 = require('md5');
const { User } = require('../../database/models');

const getUserByEmail = async (email) =>
  User.findOne({ where: { email }, attributes: { exclude: ['password'] } });

const getUserByEmailAndPassword = async (email, password) => {
  const hash = md5(password);
  return User.findOne({
    where: { email, password: hash },
    attributes: { exclude: ['password'] },
  });
};

const getUserById = async (id) => User.findByPk(id);

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
  getUserById,
};
