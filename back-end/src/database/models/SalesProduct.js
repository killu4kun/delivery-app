module.exports = (sequelize, DataTypes) => {
  const { INTEGER } = DataTypes;

  const SaleProduct = sequelize.define('saleProduct', {
    saleId: { type: INTEGER, foreignKey: true },
    productId: { type: INTEGER, foreignKey: true },
    quantity: INTEGER,
  },
  { timestamps: false, underscored: true, tableName: 'salesProducts'});

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, { foreignKey: 'saleId', as: 'sale' });
    SaleProduct.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  };

  return SaleProduct;
};