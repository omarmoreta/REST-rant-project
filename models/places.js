const mongoose = require("mongoose");

// Creating a schema and model for db
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`;
};

module.exports = mongoose.model("Place", placeSchema);
