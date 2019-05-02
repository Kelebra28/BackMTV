'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    idsProducts: DataTypes.ARRAY(DataTypes.DECIMAL),
    totalPrice: DataTypes.DECIMAL(10,2)
  }, {});
  Orders.associate = function(models) {
    Orders.hasMany(models.Products, { foreignKey:'productId', sourceKey: 'OrderPrKey'});
    Orders.belongsToMany(models.Client,{foreignKey:'userId',targetKey: 'orderKey'});
    Orders.belongsToMany(models.Client, {foreignKey:'userId', targetKey: 'payKey'});
  };
  return Orders;
};

// User.belongsToMany(Products, { through: Orders });
// Products.belongsToMany(User, { through: Orders });
