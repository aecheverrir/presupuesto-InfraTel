/* global require */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mat = require("./material");

const MaterialISchema = new Schema({
  rendimiento: {type: Number, required: false},
  valorUnit: {type: Number, required: false},
  material: {type: Schema.Types.ObjectId, ref: "Mat"}
});
module.exports = MaterialISchema;
