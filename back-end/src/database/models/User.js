module.exports = (sequelize, DataTypes) => {
  const { INTEGER, STRING } = DataTypes;

  const User = sequelize.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    email: STRING,
    password: STRING,
    role: STRING,
  },
  {
    timestamps: false, underscored: true, tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId'});
    User.hasMany(models.Sale, { foreignKey: 'sellerId' });
  };

  return User;
};