const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breweriesSchema = new Schema({
  name: { type: String, required: true },
  website_url: { type: String, required: true },
  city: String,
  state: String,
  date: { type: Date, default: Date.now }
});

const Breweries = mongoose.model("Breweries", breweriesSchema);

module.exports = Breweries;