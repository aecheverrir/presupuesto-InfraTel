/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HyESchema = new Schema({
  descripcion: {type: String, required: true, index: {unique: true}},
  unidad: {type: String, required: true},
  costoUnit: {type: Number, required: true}
});
module.exports = mongoose.model("HyE", HyESchema);
