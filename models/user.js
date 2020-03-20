const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

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

userSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, function (err, hash) {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

userSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;