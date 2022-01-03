// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

// LISTEN
app.listen(PORT);
