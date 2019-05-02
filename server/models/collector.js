'use strict';
module.exports = (sequelize, DataTypes) => {
  const Collector = sequelize.define('Collector', {
    No_caja: DataTypes.STRING,
    ids_Orders: DataTypes.STRING
  }, {});
  Collector.associate = function(models) {
    Collector.belongsTo(models.Users,{ foreignKey:'userId', as :'user' })
    Collector.belongsTo(models.Orders,{foreignKey:'orderId', targetKey: 'productKey'})
    Collector.hasMany(models.Orders,{foreignKey:'orderId', sourceKey: 'payKey'})
  };
  return Collector;
};
