'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Awards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      award_name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.DATE
      },
      ArtistId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Artists',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Awards');
  }
};
