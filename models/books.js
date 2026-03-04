'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      this.belongsTo(models.Author, { foreignKey: 'authorId' });
      this.hasOne(models.ReadingStatus, { foreignKey: 'bookId' });
    }
  }

  Book.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    publication_year: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    page_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};