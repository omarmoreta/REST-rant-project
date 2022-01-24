// // GET /places/:id/edit
// router.get("/:id/edit", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/edit", { place: places[id], id: id });
//   }
// });

// // GET /places/:id
// router.get("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/show", { place: places[id], id: id });
//   }
// });

// // POST /places
// router.post("/", (req, res) => {
//   if (!req.body.pic) {
//     req.body.pic = "/images/goofy-404.jpg";
//   }
//   if (!req.body.city) {
//     req.body.city = "Anytown";
//   }
//   if (!req.body.state) {
//     req.body.state = "USA";
//   }
//   places.push(req.body);
//   res.redirect("/places");
// });

// // PUT /places/:id
// router.put("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     if (!req.body.pic) {
//       req.body.pic = "https://unsplash.com/photos/SWnviQeRsjI";
//     }
//     if (!req.body.city) {
//       req.body.city = "Anytown";
//     }
//     if (!req.body.state) {
//       req.body.state = "USA";
//     }
//     places[id] = req.body;
//     res.redirect(`/places/${id}`);
//   }
// });

// // DELETE /places/:id
// router.delete("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     places.splice(id, 1);
//     res.redirect("/places");
//   }
// });

// module.exports = router;

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
    req.body.pic = "/images/goofy-404.jpg";
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
      res.redirect("/places", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// GET /place/:id/edit form
router.get("/:id/edit", (req, res) => {
  db.Place.findOne({ _id: req.params.id })
    .then((place) => {
      res.render(`/places/edit`, { place: place[id], id: id });
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
