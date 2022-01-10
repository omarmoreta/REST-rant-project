const mongoose = require("mongoose");

// Connecting mongodb using mongoose
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

module.exports.Place = require("./places");
