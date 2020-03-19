const db = require("../models");


// Defining methods for the sheltersController
module.exports = {
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    console.log(req.body)
  },
  findUserInfo: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbUser => console.log(dbUser))
      .catch(err => res.status(422).json(err));
  },
  verifyUser: function(req, res) {
   db.User.findOne({email: req.body.email})
    .then(dbUser => console.log(dbUser))
  },
  findUserFavorites: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel.favorites))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.Shelter
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Shelter
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Shelter
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Shelter
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
