const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;