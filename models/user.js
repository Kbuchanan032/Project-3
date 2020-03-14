const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  favorites: [],
  stayHistory: []
});

const User = mongoose.model("user", userSchema);

module.exports = User;