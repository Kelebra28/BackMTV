'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    shopping: DataTypes.ARRAY(DataTypes.DECIMAL),
    pay: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    Client.hasMany(models.Orders,{foreignKey:"orderId"})
  };
  return Client;
};