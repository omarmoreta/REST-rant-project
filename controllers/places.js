const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/h-thai-ml.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/cat-cafe.jpg",
    },
  ];
  res.render("places/index", { places });
  // res.send("GET /places");
});

module.exports = router;
