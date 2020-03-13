const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  name: String,
  address: String,
  phoneNumber: String, 
  availableBeds: Number,
  totalBeds: Number
});

const Shelter = mongoose.model("shelter", shelterSchema);

module.exports = Shelter;