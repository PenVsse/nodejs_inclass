const Orchids = require("../model/orchid");

const index = (req, res, nexy) => {
  Orchids.find({}).then((data) => {
    res.render("orchid", { title: "Lit of Orchids", orchidData: data });
  });
};

module.exports = { index };
