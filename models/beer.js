const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: { type: String, required: true },
  abvMax: String,
  ibuMax: String,
  category: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;