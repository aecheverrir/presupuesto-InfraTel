/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Item = require("./item");

const ProyectoSchema = new Schema({
  codigo: {type: Number, required: true, index: {unique: true}},
  nombre: {type: String, required: true, index: {unique: true}},
  subtotal: {type: Number, required: true},
  A: {type: Number, required: true},
  U: {type: Number, required: true},
  I: {type: Number, required: true},
  IVA: {type: Number, required: true},
  total: {type: Number, required: true},
  items: [Item]
});

module.exports = mongoose.model("Proyecto", ProyectoSchema);
