module.exports = (sequelize, DataTypes) => {
  const { INTEGER, STRING, DATE, DECIMAL } = DataTypes;

  const Sale = sequelize.define('Sale', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    sellerId: INTEGER,
    totalPrice: DECIMAL(9, 2),
    deliveryAddress: STRING(100),
    deliveryNumber: STRING(50),
    saleDate: DATE,
    status: STRING(50),
  },
  { timestamps: false, underscored: true, tableName: 'sales' });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sale;
};