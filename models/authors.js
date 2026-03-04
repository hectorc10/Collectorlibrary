'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      this.hasMany(models.Book, { foreignKey: 'authorId' });
    }
  }

  Author.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
  });

  return Author;
};