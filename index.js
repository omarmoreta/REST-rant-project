// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const methodOverride = require("method-override");
const viewEngine = require("express-react-views").createEngine();

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", viewEngine);
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ROUTES
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.status(404).render("error404");
});

// LISTEN
app.listen(PORT);
