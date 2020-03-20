const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const providerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique: [true, 'That email address is already registered']},
  password: String,
  shelters: []
});

providerSchema.pre('save', function (next) {
  var provider = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(provider.password, salt, null, function (err, hash) {
              if (err) {
                  return next(err);
              }
              provider.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

providerSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

const Provider = mongoose.model("provider", providerSchema);

module.exports = Provider;