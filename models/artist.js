'use strict';
module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define('Artist', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
       Artist.hasMany(models.Award)
      }
    }
  });
  return Artist;
};
