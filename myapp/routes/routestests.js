var routes = require("express").Router();
var routestests= require("../controllers/routestests")

routes.get("/test", routestests.getTest)
module.exports = routes
