const router = require("express").Router();
const sheltersController = require('../../controllers/sheltersController');
var passport = require('passport');

require('../../config/passport')(passport);

var Shelter = require("../../models/shelter");

//Public routes
router.route('/')
  .get(sheltersController.findAll)

//Authorized routes
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Shelter.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Shelter.find(function (err, shelter) {
      if (err) return next(err);
      res.json(shelter);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

module.exports = router;