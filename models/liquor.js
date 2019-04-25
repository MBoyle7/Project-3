const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const liquorSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Liquor = mongoose.model("Liquor", liquorSchema);

module.exports = Liquor;