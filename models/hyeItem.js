/* global require */
const mongoose = require("mongoose");
const HyE = require("./herramientaYEquipo");
const Schema = mongoose.Schema;

const HyEISchema = new Schema({
  rendimiento: {type: Number, required: false},
  valorUnit: {type: Number, required: false},
  herrramientasYEquipos: {type: Schema.Types.ObjectId, ref: "HyE"}
});
module.exports = HyEISchema;;
