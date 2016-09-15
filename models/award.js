'use strict';
module.exports = function(sequelize, DataTypes) {
  var Award = sequelize.define('Award', {
    award_name: DataTypes.STRING,
    year: DataTypes.DATE,
    ArtistId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Award.belongsTo(models.Artist)
      }
    }
  });
  return Award;
};
