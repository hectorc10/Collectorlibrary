'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReadingStatus extends Model {
    static associate(models) {
      this.belongsTo(models.Books, { foreignKey: 'bookId' });
    }
  }

  ReadingStatus.init({
    status: DataTypes.STRING,
    date_started: DataTypes.DATE,
    date_finished: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReadingStatus',
    
  });

  return ReadingStatus;
};