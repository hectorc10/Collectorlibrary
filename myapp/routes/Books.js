var routes = require("express").Router();
var booksController = require("../controllers/Books");

routes.get("/books", booksController.getBooks);

module.exports = routes;