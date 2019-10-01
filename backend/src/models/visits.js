'use strict';
module.exports = (sequelize, DataTypes) => {
  const visits = sequelize.define('visits', {
    date: DataTypes.DATE,
    net: DataTypes.FLOAT,
    visit_total: DataTypes.FLOAT,
    description: DataTypes.STRING,
    sales_representative: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER
  }, {});
  visits.associate = function(models) {
    // associations can be defined here
    visits.hasOne(models.sales_representative);
  };
  return visits;
};