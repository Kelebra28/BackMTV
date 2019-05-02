'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collector = sequelize.define('Collector', {
    No_caja: DataTypes.STRING,
    ids_Orders: DataTypes.STRING
  }, {});
  Collector.associate = function(models) {
    Collector.belongsTo(models.Orders,{foreignKey:"userId", as:"user"})
    Collector.hasMany(models.Orders,{foreignKey:"orderId"})
  };
  return Collector;
};