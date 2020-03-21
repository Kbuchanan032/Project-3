const db = require("../models");

// Defining methods for the sheltersController
module.exports = {
  findAll: function(req, res) {
    db.Shelter
      .find(req.query)
      .sort({ date: -1 })
      .then(dbShelter => res.json(dbShelter))
      .catch(err => res.status(422).json(err));
  },
  findByProviderId: function(req, res) {
    db.Shelter
      .find({provider: req.params.id})
      .then(dbShelter => res.json(dbShelter))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      db.Shelter
        .create(req.body)
        .then(dbShelter => res.json(dbShelter))
        .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.Shelter
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbShelter => res.json(dbShelter))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Shelter
      .findById({ _id: req.params.id })
      .then(dbShelter => dbShelter.remove())
      .then(dbShelter => res.json(dbShelter))
      .catch(err => res.status(422).json(err));
  }
};
