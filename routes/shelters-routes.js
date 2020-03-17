const express = require('express');
const {check} = require('express-validator');

const sheltersControllers = require('../controllers/shelters-controllers');

const router = express.Router();




router.get('/:sid', sheltersControllers.getShelterById);

router.get('/user/:uid', sheltersControllers.getSheltersByUserId );

router.post(
    '/',
    [
      check('name')
        .not()
        .isEmpty(),
      check('description').isLength({ min: 5 }),
      check('address')
        .not()
        .isEmpty()
    ],
    sheltersControllers.createShelter
  );

router.patch('/:sid', [
  check('name').not().isEmpty(),
  check('totalBeds').not().isEmpty(),
  check('description').isLength({ min: 5 }),
],
    sheltersControllers.updateShelter);

router.delete('/:sid', sheltersControllers.deleteShelter);


module.exports = router;