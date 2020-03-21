const db = require("../models");


// Defining methods for the sheltersController
module.exports = {
  findUserInfo: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbUser => console.log(dbUser))
      .catch(err => res.status(422).json(err));
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
