var express = require("express");
var orchidRouter = express.Router();
const orchidController = require("../controller/orchidController");

orchidRouter.route("/").get(orchidController.index).post(orchidController.create);
orchidRouter.route("/edit/:orchidId").get(orchidController.formData).post(orchidController.update);
orchidRouter.route("/delete/:orchidId").delete(orchidController.remove);

module.exports = orchidRouter;
