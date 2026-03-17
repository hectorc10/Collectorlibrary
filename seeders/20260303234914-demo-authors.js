'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Authors", [
      {
        firstName: "Steve",
        lastName: "Berry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Francisco",
        lastName: "Tarazona",

        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Authors", null, {});
  }
};