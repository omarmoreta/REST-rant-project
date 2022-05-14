// DEPENDENCIES
var express = require("express");
// CONFIGURATION
require("dotenv").config();
var PORT = process.env.PORT;
var app = express();
var methodOverride = require("method-override");
// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// ROUTES
app.use("/places", require("./controllers/places.ts"));
app.get("/", function (req, res) {
  res.render("home");
});
app.get("*", function (req, res) {
  res.status(404).render("error404");
});
// LISTEN
app.listen(PORT);
