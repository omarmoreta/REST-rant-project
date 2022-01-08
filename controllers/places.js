const router = require("express").Router();
const places = require("../models/places");

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id] });
  }
});

// GET /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
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
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;
