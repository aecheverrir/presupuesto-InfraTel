/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MOSchema = new Schema({
  descripcion: {type: String, required: true, index: {unique: true}},
  unidad: {type: String, required: true},
  costoUnit: {type: Number, required: true}
});
module.exports = mongoose.model("MO", MOSchema);
