'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    credit_limit: DataTypes.FLOAT,
    available_credit: DataTypes.FLOAT,
    visits_percentage: DataTypes.FLOAT
  }, {});
  customers.associate = function(models) {
    customers.hasOne(models.cities);
    customers.hasMany(models.visits);
  };
  return customers;
};