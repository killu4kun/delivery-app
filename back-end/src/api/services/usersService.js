const md5 = require('md5');
const { User } = require('../../database/models');

const getUserByEmail = async (email) => (
  User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  })
);

const getUserByEmailAndPassword = async (email, password) => {
  const hash = md5(password);
  return User.findOne({
    where: { email, password: hash },
    attributes: { exclude: ['password'] },
  });
};

const getUserById = async (id) => User.findByPk(id);

const getUserByName = async (name) => (
  User.findOne({
    where: { name },
    attributes: { exclude: ['password'] },
  })
);

const createUser = async ({ name, email, password, role }) => {
  const hash = md5(password);
  const { dataValues } = await User.create({ name, email, password: hash, role });
  delete dataValues.password;
  return dataValues;
};

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
  getUserById,
  getUserByName,
  createUser,
};