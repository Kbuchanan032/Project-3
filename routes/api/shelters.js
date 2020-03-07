const router = require("express").Router();
const sheltersController = require("../../controllers/sheltersController");

// Matches with "/api/shelter"
router.route("/")
  .get(sheltersController.findAll)
  .post(sheltersController.create);

// Matches with "/api/shelter/:id"
router
  .route("/:id")
  .get(sheltersController.findById)
  .put(sheltersController.update)
  .delete(sheltersController.remove);

module.exports = router;