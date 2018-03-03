/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HyE = require("./hyeItem");
const MO = require("./manoDeObra");
const Material = require("./material");

const ItemSchema = new Schema ({
  nombre: {type: String, required: true, index: {unique: true}},
  codigo: {type: Number, required: true, index: {unique: true}},
  unidad
  cantidad
  valorUnitarioTotal
  valorTotal
  hyes: [HyE],
  manosObra: [MO],
  materiales: [Material]
});

module.exports = ItemSchema;