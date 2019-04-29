const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breweriesSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Breweries = mongoose.model("Beer", breweriesSchema);

module.exports = Breweries;