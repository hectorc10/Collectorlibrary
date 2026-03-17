var routes = require("express").Router();
var booksController = require("../controllers/Books");

routes.get("/books", booksController.getBooks);
routes.get("/books/:isbn", booksController.getBookByISBN);
routes.post("/books", booksController.createBook);
module.exports = routes;