const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  img: String,
  shelterName: String,
  address: {
    street: String,
    city: String,
    state: String, 
    zip: String
  },
  shelterPhoneNumber: String, 
  shelterDescription: String,
  availableBeds: Number,
  totalBeds: Number,
  contactPerson: {
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }
});

const Shelter = mongoose.model("shelter", shelterSchema);

module.exports = Shelter;