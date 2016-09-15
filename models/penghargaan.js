'use strict';
module.exports = function(sequelize, DataTypes) {
  var Penghargaan = sequelize.define('Penghargaan', {
    award_name: DataTypes.STRING,
    year: DataTypes.DATE,
    ArtistId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Penghargaan;
};