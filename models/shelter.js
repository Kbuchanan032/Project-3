const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  name: String,
  address: String
});

const Shelter = mongoose.model("shelter", shelterSchema);

module.exports = Shelter;