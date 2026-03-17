var routes = require("express").Router();
var readingStatusController = require("../controllers/ReadingStatus");

routes.get("/ReadingStatus", readingStatusController.getReadingStatus);

module.exports = routes;