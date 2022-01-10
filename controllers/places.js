// const router = require("express").Router();
// const places = require("../models/places");

// // GET /places/new
// router.get("/new", (req, res) => {
//   res.render("places/new");
// });

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

// // GET /places
// router.get("/", (req, res) => {
//   res.render("places/index", { places });
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
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// GET places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

// GET /places/:id
router.get("/:id", (req, res) => {
  res.send("GET /places/:id stub");
});

// PUT /places/:id
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

// DELETE /places/:id
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

// GET /place/:id/edit form
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
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
