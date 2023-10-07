const Orchids = require("../model/orchid");

class orchidController {
  index(req, res, nexy) {
    Orchids.find({}).then((data) => {
      res.render("orchid", { title: "Lit of Orchids", orchidData: data });
    });
  }
}

module.exports = new orchidController();
