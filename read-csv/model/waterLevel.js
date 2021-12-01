const mongoose = require("mongoose");
const { Schema } = mongoose;
const waterLevelSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    require: true,
  },
  ms: {
    type: Number,
    require: true,
  },
  level: {
    type: Number,
    require: true,
  },
  temperature: {
    type: Number,
    require: true,
  },
});
module.exports = waterLevelSchema;
