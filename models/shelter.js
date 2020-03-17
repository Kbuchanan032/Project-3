const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  img: String,
  name: String,
  address: String,
  phoneNumber: String, 
  description: String,
  availableBeds: Number,
  totalBeds: Number
});

const Shelter = mongoose.model("shelter", shelterSchema);

module.exports = Shelter;