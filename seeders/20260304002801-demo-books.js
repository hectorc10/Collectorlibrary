'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        title: "El amanecer",
        authorId: 1,
        genre: "Horror",
        publication_year: 1977,
        isbn: "9780307743657",
        page_count: 447,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Asesinato en el Expreso de Oriente",
        authorId: 2,
        genre: "Misterio",
        publication_year: 1934,
        isbn: "9780062073501",
        page_count: 256,
        createdAt: new Date(),
        updatedAt: new Date()
      },
 
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  }
};