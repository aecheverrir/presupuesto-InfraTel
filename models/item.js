/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HyE = require("./hyeItem");
const MO = require("./moItem");
const Material = require("./materialItem");
const Transporte = require("./transporteItem");

const ItemSchema = new Schema ({
  nombre: {type: String, required: false},
  codigo: {type: Number, required: false},
  unidad: {type: String, required: false},
  cantidad: {type: Number, required: false},
  valorUnitarioTotal: {type: Number, required: false},
  valorTotal: {type: Number, required: false},
  hyes: [HyE],
  manosObra: [MO],
  materiales: [Material],
  transportes: [Transporte]
});

module.exports = ItemSchema;