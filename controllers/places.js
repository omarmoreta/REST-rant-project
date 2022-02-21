const router = require("express").Router();
const db = require("../models");

// GET /places
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// POST /places
router.post("/", (req, res) => {
  if (!req.body.pic) {
    req.body.pic =
      "https://images.unsplash.com/photo-1519146810018-be3639aba4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "ValidationError: ";
        for (let field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`;
          message += `${err.errors[field].message}`;
        }
        // console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        console.log("err", err);
        res.render("error404");
      }
    });
});

// GET places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

// GET /places/:id
router.get("/:id", (req, res) => {
  db.Place.findOne({ _id: req.params.id })
    .populate("comments")
    .then((place) => {
      // console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// PUT /places/:id
router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then((place) => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// DELETE /places/:id
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then((place) => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// GET /place/:id/edit form
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// POST /places/:id/comment
router.post("/:id/comment", (req, res) => {
  // console.log("post comment", req.body);
  if (req.body.author === "") {
    req.body.author = undefined;
  }
  req.body.rant = req.body.rant ? true : false;
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place
            .save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`);
            })
            .catch((err) => {
              console.log("err", err);
              res.render("error404");
            });
        })
        .catch((err) => {
          console.log("err", err);
          res.render("error404");
        });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// DELETE /places/:id/comment/:commentId
router.delete("/:id/comment/:commentId", (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(() => {
      console.log("Success");
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// POST /places/:id/rant
router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

// DELETE /places/:id/rant/:rantId
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
