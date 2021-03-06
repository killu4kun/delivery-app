const { idNotFound, notFound } = require('../errors/errorsTemplate');
const {
  User,
  Sale,
  SaleProduct,
  Product,
  sequelize,
} = require('../../database/models');

const read = async () => {
  const saleProducts = await SaleProduct.findAll({
    include: [
      {
        model: Sale,
        as: 'sale',
        // attributes: [],
      },
      {
        model: Product,
        as: 'product',
        // attributes: [],
      },
    ],
  });
  if (!saleProducts.length) throw notFound('sales');
  return saleProducts;
};

const readWhere = async (id) => {
  const saleProducts = await SaleProduct.findAll({
    where: { saleId: id },
    include: [
      {
        model: Sale,
        as: 'sale',
        // attributes: [],
      },
      {
        model: Product,
        as: 'product',
        // attributes: [],
      },
    ],
  });
  if (!saleProducts.length) throw notFound('sales');
  return saleProducts;
};

const readOne = async (id) => {
  const saleProducts = await SaleProduct.findByPk(id, {
    include: [
      {
        model: Sale,
        as: 'sale',
        // attributes: [],
      },
      {
        model: Product,
        as: 'product',
        // attributes: [],
      },
    ],
  });
  if (!saleProducts) throw idNotFound('sale');
  return saleProducts;
};

const mapSalesProductsBulk = async (products, saleId) =>
  products.map((product) => ({
    saleId,
    productId: product.productId,
    quantity: product.quantity,
  }));

const create = async (body) => {
  const result = await sequelize.transaction(async (t) => {
    const sale = await Sale.create(body, { transaction: t });
    const productsMap = await mapSalesProductsBulk(body.products, sale.id);
    await SaleProduct.bulkCreate(productsMap, {
      transaction: t,
    });
    return sale.id;
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
      { transaction: t },
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

const getSellerSalesByName = async (name) => {
  const seller = await User.findOne({ where: { name } });
  if (!seller) return notFound('user');
  const sales = await Sale.findAll({ where: { sellerId: seller.id } });
  console.log(sales);
  if (!sales.length) throw notFound('sales');
  return sales;
};

const getUserSalesByUserId = async (id) => {
  const salesUser = await Sale.findAll({
    where: { userId: id },
  });
  /* const saleProducts = await SaleProduct.findAll({
    include: [
      {
        model: Sale,
        as: 'sale',
        // attributes: [],
        where: {
          userId: id
        }
      },
      {
        model: Product,
        as: 'product',
        // attributes: [],
      },
    ],
  });  */
  if (!salesUser.length) throw notFound('sales');
  return salesUser;
};

module.exports = {
  read,
  readOne,
  readWhere,
  create,
  update,
  destroy,
  getSellerSalesByName,
  getUserSalesByUserId,
};
