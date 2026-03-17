'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ReadingStatuses", [
      {
        bookId: 1,
        status: "Terminado",
        date_started: new Date("2024-01-01"),
        date_finished: new Date("2024-01-10"),
        rating: 5,
        notes: "Gran libro",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookId: 2,
        status: "En proceso",
        date_started: new Date("2024-02-01"),
        date_finished: null,
        rating: null,
        notes: "Interesante hasta ahora",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ReadingStatuses", null, {});
  }
};