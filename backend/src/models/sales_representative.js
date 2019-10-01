'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_representative = sequelize.define('sales_representative', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  sales_representative.associate = function(models) {
    // associations can be defined here
  };
  return sales_representative;
};