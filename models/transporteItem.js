/* global require */
const mongoose = require("mongoose");
const Trans = require("./transporte");
const Schema = mongoose.Schema;

const TransISchema = new Schema({
  rendimiento: {type: Number, required: false},
  valorUnit: {type: Number, required: false},
  transporte: {type: Schema.Types.ObjectId, ref: "Trans"}
});
module.exports = TransISchema;
