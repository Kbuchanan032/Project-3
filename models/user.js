const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique: [true, 'That email address is already registered']},
  password: String,
  img: {type: String, default: 'https://via.placeholder.com/150'},
  favorites: [],
  reservations: [],
  stayHistory: []
});

const User = mongoose.model("user", userSchema);

module.exports = User;