'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define('Seller', {
    No_Mesa: DataTypes.STRING,
    reference: DataTypes.STRING,
    comite: DataTypes.STRING
  }, {});
  Seller.associate = function(models) {
    Seller.belongsTo(models.Users,{foreignKey:'userId', as:'user', });
    Seller.hasMany(models.Products,{foreignKey:'productId',sourceKey: 'productKey'});
  };
  return Seller;
};

