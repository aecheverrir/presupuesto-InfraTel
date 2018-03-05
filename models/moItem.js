/* global require */
const mongoose = require("mongoose");
const MO = require("./manoDeObra");
const Schema = mongoose.Schema;

const MOISchema = new Schema({
  rendimiento: {type: Number, required: false},
  valorUnit: {type: Number, required: false},
  manoObra: {type: Schema.Types.ObjectId, ref: "MO"}
});
module.exports = MOISchema;
