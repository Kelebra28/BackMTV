'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define('Seller', {
    No_Mesa: DataTypes.STRING,
    reference: DataTypes.STRING,
    comite: DataTypes.STRING
  }, {});
  Seller.associate = function(models) {
    Seller.belongsTo(models.User,{foreignKey:"userId", as:"user"});
    Seller.hasMany(models.Products,{foreignKey:"productId"});
  };
  return Seller;
};

