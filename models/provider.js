const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique: [true, 'That email address is already registered']},
  password: String,
  shelters: []
});

const Provider = mongoose.model("provider", providerSchema);

module.exports = Provider;