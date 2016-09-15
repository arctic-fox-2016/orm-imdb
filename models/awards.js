'use strict';
module.exports = function(sequelize, DataTypes) {
  var Awards = sequelize.define('Awards', {
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
  return Awards;
};