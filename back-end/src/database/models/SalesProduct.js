module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true },
    productId: { type: DataTypes.INTEGER, foreignKey: true },
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, underscored: true, tableName: 'salesProducts'});

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, { foreignKey: 'saleId', as: 'sale' });
    SaleProduct.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  };

  return SaleProduct;
};