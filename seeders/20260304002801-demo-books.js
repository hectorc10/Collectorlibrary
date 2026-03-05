'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        title: "El amanecer",
        author_id: 1,
        genre: "Horror",
        publication_year: 1977,
        isbn: "9780307743657",
        page_count: 447,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Asesinato en el Expreso de Oriente",
        author_id: 2,
        genre: "Misterio",
        publication_year: 1934,
        isbn: "9780062073501",
        page_count: 256,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Cien años de soledad",
        author_id: 3,
        genre: "Realismo Mágico",
        publication_year: 1967,
        isbn: "9780060883287",
        page_count: 417,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Orgullo y prejuicio",
        author_id: 4,
        genre: "Romance",
        publication_year: 1813,
        isbn: "9780141439518",
        page_count: 279,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  }
};