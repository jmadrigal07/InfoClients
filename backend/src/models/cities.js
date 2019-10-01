'use strict';
module.exports = (sequelize, DataTypes) => {
  const cities = sequelize.define('cities', {
    name: DataTypes.STRING
  }, {});
  cities.associate = function(models) {
    // associations can be defined here
    customers.hasOne(models.states)
  };
  return cities;
};