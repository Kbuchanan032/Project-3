const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  name: {type:String, required: true},
  address: {type:String, required: true},
  description: {type:String, required: true},
  phoneNumber: {type:String, required: true}, 
  availableBeds: {type:String, required: true},
  totalBeds: {type:Number, required: true},
  image: {type:String, required: true},
  location: {
    lat: {type:Number, required: true},
    lng: {type:Number, required: true}
  },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});



module.exports = mongoose.model('Shelter', shelterSchema);