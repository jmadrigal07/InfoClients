'use strict';
module.exports = (sequelize, DataTypes) => {
  const states = sequelize.define('states', {
    name: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {});
  states.associate = function(models) {
    // associations can be defined here
    states.hasOne(models.countries)
  };
  return states;
};