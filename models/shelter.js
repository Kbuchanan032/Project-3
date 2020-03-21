const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  img: String,
  name: String,
  address: String,
  phone: String, 
  description: String,
  availableBeds: Number,
  totalBeds: Number,
  provider: { type: Schema.Types.ObjectId, ref: 'Provider'}
});

const Shelter = mongoose.model("shelter", shelterSchema);

module.exports = Shelter;