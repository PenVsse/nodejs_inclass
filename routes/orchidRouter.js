var express = require("express");
var orchidRouter = express.Router();
const Orchids = require("../model/orchid");

orchidRouter
  .route("/")
  .all((req, res, next) => {
    res.StatusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .get((req, res, next) => {
    Orchids.find({}).then((data) => {
      res.statusCode = 200;
      return res.json(data);
    });
  })
  .post((req, res, next) => {
    Orchids.create(req.body)
      .then((data) => {
        res.statusCode = 200;
        return res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .delete((req, res) => {
    Orchids.deleteOne({}).then((data) => {
      res.statusCode = 200;
      return res.json(data);
    });
  });

orchidRouter
  .route("/:orchidId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .get((req, res, next) => {
    Orchids.findById(req.params.orchidId)
      .then((data) => {
        res.statusCode = 200;
        return res.json(data);
      })
      .catch((err) => {
        res.statusCode = 404;
        return res.json("Orchid not found!");
      });
  })
  .put((req, res, next) => {
    Orchids.findByIdAndUpdate(req.body.orchidId, { $set: req.body }, { new: true })
      .then((data) => {
        res.statusCode = 200;
        return res.json(data);
      })
      .catch((err) => {
        res.statusCode = 404;
        console.log(err);
      });
  })

  .delete((req, res) => {
    Orchids.deleteOne({}).then((data) => {
      res.statusCode = 200;
      return res.json(data);
    });
  });

orchidRouter
  .route("/:orchidId/comments")
  .get((req, res) => {
    Orchids.findById(req.params.orchidId).then((data) => {
      return res.json(data.comments);
    });
  })
  .post((req, res) => {
    Orchids.findById(req.params.orchidId)
      .then((data) => {
        if (!data) {
          return res.json("Not found");
        }
        data.comments.push(req.body);
        data.save();
        res.statusCode = 200;
        return res.json(data);
      })
      .catch((err) => {});
  });

orchidRouter
  .route("/:orchidId/comments/:commentId")
  .get((req, res) => {
    Orchids.findById(req.params.orchidId).then((data) => {
      return res.json(data.comments.id(req.params.commentId));
    });
  })
  .put((req, res) => {
    Orchids.findById(req.params.orchidId)
      .then((data) => {
        console.log(data);

        if (!data) {
          console.log(data);
          return res.json("Not found");
        }
        if (req.body.rating) {
          data.comments.id(req.params.commentId).rating = req.body.rating;
        }
        if (req.body.comment) {
          data.comments.id(req.params.commentId).comment = req.body.comment;
        }
        console.log(data);

        return res.json(data);
      })
      .catch((err) => {});
  });
module.exports = orchidRouter;
