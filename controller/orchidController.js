const Orchids = require("../model/orchid");
let categoryData = [
  {
    id: "1",
    name: "Dendrobium",
  },
  {
    id: "2",
    name: "Cattleya",
  },
  {
    id: "3",
    name: "Brassavola",
  },
];
class orchidController {
  index(req, res, next) {
    const baseURL = req.originalUrl;
    Orchids.find({})
      .then((orchids) => {
        res.render("orchid", {
          title: "List of Orchids",
          orchidData: orchids,
          categoryData: categoryData,
          baseURL: baseURL,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const orchid = new Orchids(req.body);
    orchid
      .save()
      .then(() => res.redirect("/orchid"))
      .catch((error) => {});
  }
  formData(req, res, next) {
    const orchidId = req.params.orchidId;
    Orchids.findById(orchidId).then((data) => {
      res.render("orchidDetail", {
        title: "Detail of Orchids",
        categoryData,
        data,
      });
    });
  }
  update(req, res, next) {
    Orchids.updateOne({ _id: req.params.orchidId }, req.body).then((data) => {
      res.redirect("/");
    });
  }
  remove(req, res, next) {
    console.log("12313231");
    // Orchids.findByIdAndDelete({ _id: req.params.orchidId }).then((data) => {
    //   res.redirect("/");
    // });
  }
}
module.exports = new orchidController();
