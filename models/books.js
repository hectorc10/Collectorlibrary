'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    static associate(models) {
      this.belongsTo(models.Authors, { foreignKey: 'authorId' });
      this.hasOne(models.ReadingStatus, { foreignKey: 'bookId' });
    }
  }

  Books.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    publication_year: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    page_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Books',
  });

  return Books;
};