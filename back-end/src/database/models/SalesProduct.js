module.exports = (sequelize, DataTypes) => {
  const { INTEGER } = DataTypes;

  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: INTEGER, primaryKey: true},
    productId: { type: INTEGER, primaryKey: true },
    quantity: INTEGER,
  },
  { timestamps: false, underscored: true, tableName: 'salesProducts'});

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, { foreignKey: 'saleId', as: 'sale' });
    SaleProduct.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  };

  return SaleProduct;
};