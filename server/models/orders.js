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
    Orders.hasMany(models.Collector,{foreignKey:"userId"});
    Orders.hasMany(models.Client,{foreignKey:"userId"});
    Orders.belongsToMany(models.Products, { through: Orders });
  };
  return Orders;
};

// User.belongsToMany(Products, { through: Orders });
// Products.belongsToMany(User, { through: Orders });
