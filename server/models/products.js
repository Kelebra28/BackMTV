  

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4 
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    description: DataTypes.TEXT,
  }, {});

    Products.associate = function(models) {
    Products.belongsToMany(models.Orders,{foreignKey:'orderId',targetKey: 'OrderPrKey'});
    Products.hasMany(models.Seller,{foreignKey:'userId'});
  };
  return Products;
};


// Orders = sequelize.define('orders', {
//   ,as:"order"/*/*/*/*/**/*/*//*/*/*/*/*/*/*/*/*/*/*/ */
// });belongsToMany(Products, { through: Orders });
// Products.belongsToMany(User, { through: Orders });

// User.
// user.addOrder(product, { through: { role: 'manager' }})