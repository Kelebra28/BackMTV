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
    Orders.belongsTo(models.Client,{foreignKey:"userId"});
    Orders.hasMany(models.Products, { through: Orders });
  };
  return Orders;
};

// User.belongsToMany(Products, { through: Orders });
// Products.belongsToMany(User, { through: Orders });
