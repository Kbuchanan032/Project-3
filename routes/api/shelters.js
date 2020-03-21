const router = require("express").Router();
const sheltersController = require('../../controllers/sheltersController');
var passport = require('passport');

require('../../config/passport')(passport);

var db = require("../../models");

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

router.route('/')
  .post(sheltersController.create)
  

router.route('/:id')
  .get(sheltersController.findByProviderId)

module.exports = router;