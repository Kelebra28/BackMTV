'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Products',
      'userId',{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )
  
    queryInterface.addColumn(
      'Orders',
      'userId',{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:'id'
        }
      }
    )

    queryInterface.addColumn(
      'Seller',
      'UserId',{
        type:Sequelize.UUID,
        references:{
          model:'User',
          key:'id'
        }
      }
    )

    queryInterface.addColumn(
      'Collector',
      'UserId',{
        type:Sequelize.UUID,
        references:{
          model:'User',
          key:'id'
        }
      }
    )
  
    queryInterface.addColumn(
      'Client',
      'UserId',{
        type:Sequelize.UUID,
        references:{
          model:'User',
          key:'id'
        }
      }
    )
  
  
  
  
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};