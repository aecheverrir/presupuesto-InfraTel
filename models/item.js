/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HyE = require("./hyeItem");
const MO = require("./moItem");
const Material = require("./materialItem");
const Transporte = require("./transporteItem");

const ItemSchema = new Schema ({
  nombre: {type: String, required: true, index: {unique: true}},
  codigo: {type: Number, required: true, index: {unique: true}},
  unidad: {type: String, required: true},
  cantidad: {type: Number, required: true},
  valorUnitarioTotal: {type: Number, required: true},
  valorTotal: {type: Number, required: true},
  hyes: [HyE],
  manosObra: [MO],
  materiales: [Material],
  transportes: [Transporte]
});

module.exports = ItemSchema;