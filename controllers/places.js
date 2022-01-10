const router = require("express").Router();
const places = require("../models/places");

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

// GET /places/:id/edit
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id: id });
  }
});

// GET /places/:id
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id: id });
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

// PUT /places/:id
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      req.body.pic = "https://unsplash.com/photos/SWnviQeRsjI";
    }
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

// DELETE /places/:id
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    console.log("DELETED");
    res.redirect("/places");
  }
});

module.exports = router;
