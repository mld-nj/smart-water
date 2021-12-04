const mongoose = require("mongoose");
const md5 = require("../util/md5");
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    set: (value) => md5(value),
  },
  email: {
    type: String,
    require: true,
  },
  permission: {
    type: String,
    require: true,
    default: 1,
  },
});
module.exports = userSchema;
