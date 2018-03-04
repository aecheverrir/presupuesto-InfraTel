/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  descripcion: {type: String, required: true},
  unidad: {type: String, required: true},
  costoUnit: {type: Number, required: true}
});
module.exports = mongoose.model("Mat", MaterialSchema);