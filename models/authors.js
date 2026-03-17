'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    static associate(models) {
      this.hasMany(models.Books, { foreignKey: 'authorId' });
    }
  }

  Authors.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Authors',
  });

  return Authors;
};