var express = require("express");
var orchidRouter = express.Router();
const orchidController = require("../controller/orchidController");

orchidRouter.route("/").get(orchidController.index);

module.exports = orchidRouter;
