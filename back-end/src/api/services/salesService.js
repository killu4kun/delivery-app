const { User, Sale } = require('../../database/models');
const { noSales, saleNotFound } = require('../errors/salesErrors');

const read = async () => {
  const sales = await Sale.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['name', 'role'],
      },
      {
        model: User,
        as: 'seller',
        attributes: ['name', 'role'],
      },
    ],
  });
  if (!sales.length) throw noSales;
  return sales;
};

const readOne = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['name', 'role'],
      },
      {
        model: User,
        as: 'seller',
        attributes: ['name', 'role'],
      },
    ],
  });
  if (!sale) throw saleNotFound;
  return sale;
};

const create = async (body) => {
  const sale = await Sale.create(body);
  return sale;
};

const update = async (id, body) => {
  await Sale.update(body, { where: { id } });
  const updatedSale = await readOne(id);
  return updatedSale;
};

const destroy = async (id) => {
  await readOne(id);
  await Sale.destroy({ where: { id } });
  return { message: `Sale ${id} has been deleted` };
};

module.exports = { read, readOne, create, update, destroy };
