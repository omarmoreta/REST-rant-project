// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// ROUTES
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
  // res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.render("error404");
  // res.status(404).send("<h1>404 Page</h1>");
});

// LISTEN
app.listen(PORT);
