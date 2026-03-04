'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Authors", [
      {
        id: 1,
        first_name: "Steve",
        last_name: "Berry",
        birth_year: 1957,
        nationality: "American",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        first_name: "Francisco",
        last_name: "Tarazona",
        birth_year: 1981,
        nationality: "Salvadoran",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Authors", null, {});
  }
};