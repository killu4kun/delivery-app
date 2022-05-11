const {
  Sale,
  SaleProduct,
  Product,
  sequelize,
} = require("../../database/models");
const { getUserByName } = require("./usersService");
const { noSales, saleNotFound } = require("../errors/salesErrors");

const read = async () => {
  const saleProducts = await SaleProduct.findAll({
    include: [
      {
        model: Sale,
        as: "sale",
        // attributes: [],
      },
      {
        model: Product,
        as: "product",
        // attributes: [],
      },
    ],
  });
  if (!saleProducts.length) throw noSales;
  return saleProducts;
};

const readWhere = async (id) => {
  const saleProducts = await SaleProduct.findAll({
    where: { saleId: id },
    include: [
      {
        model: Sale,
        as: "sale",
        // attributes: [],
      },
      {
        model: Product,
        as: "product",
        // attributes: [],
      },
    ],
  });
  if (!saleProducts.length) throw noSales;
  return saleProducts;
};

const readWhereUser = async (id) => {
  const sale = await Sale.findAll({
    where: { userId: id },
  });
  if (!sale.length) throw noSales;
  return sale;
};

const readWhereSeller = async (id) => {
  const sales = await Sale.findAll({
    where: { sellerId: id }
  });
  if (!sales.length) throw noSales;
  return sales;
};

const readOne = async (id) => {
  const saleProducts = await SaleProduct.findByPk(id, {
    include: [
      {
        model: Sale,
        as: "sale",
        // attributes: [],
      },
      {
        model: Product,
        as: "product",
        // attributes: [],
      },
    ],
  });
  if (!saleProducts) throw saleNotFound;
  return saleProducts;
};

const getUserBuysByName = async (name) => {
  const { id } = await getUserByName(name);
  return await readWhereUser(id);
};

const getSellerSalesByName = async (name) => {
  const { id } = await getUserByName(name);
  return await readWhereSeller(id);
};

const mapSalesProductsBulk = async (products, saleId) =>
  products.map((product) => ({
    saleId,
    productId: product.id,
    quantity: product.quantity,
  }));

const create = async (body) => {
  const result = await sequelize.transaction(async (t) => {
    const sale = await Sale.create(body, { transaction: t });
    const productsMap = await mapSalesProductsBulk(body.products, sale.id);
    const saleProducts = await SaleProduct.bulkCreate(productsMap, {
      transaction: t,
    });
    return saleProducts;
  });
  return result;
};

const update = async (id, body) => {
  const result = await sequelize.transaction(async (t) => {
    await Sale.update(body, { where: { id } }, { transaction: t });
    const productsMap = await mapSalesProductsBulk(body.products, id);
    await SaleProduct.update(
      productsMap,
      { where: { saleId: id } },
      { transaction: t }
    );
    const updatedSales = await readWhere(id);
    return updatedSales;
  });
  return result;
};

const destroy = async (id) => {
  const result = await sequelize.transaction(async (t) => {
    await readOne(id);
    await SaleProduct.destroy({ where: { saleId: id } }, { transaction: t });
    await Sale.destroy({ where: { id } }, { transaction: t });
    return { message: `Sales with ${id} has been deleted` };
  });
  return result;
};

module.exports = {
  read,
  readOne,
  readWhere,
  getUserBuysByName,
  getSellerSalesByName,
  create,
  update,
  destroy,
};
