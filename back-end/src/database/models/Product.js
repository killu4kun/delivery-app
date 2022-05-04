module.exports = (sequelize, DataTypes) => {
  const { INTEGER, STRING, DECIMAL } = DataTypes;

  const Product = sequelize.define('Product', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    price: DECIMAL(4, 2),
    urlImage: STRING(200),
  },
  { timestamps: false, underscored: true, tableName: 'products'});

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, { foreignKey: 'productId', as: 'sale' });
  };

  return Product;
};