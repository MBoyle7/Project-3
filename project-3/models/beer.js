const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;