const router = require("express").Router();
const providersController = require("../../controllers/providersController");


// Matches with "/api/providers/:id"
router
  .route("/:id")
  .get(providersController.findProviderInfo)
  .put(providersController.update)
  .delete(providersController.remove);

router
  .route("/login")
  .get(providersController.findProviderInfo)
  .put(providersController.update)
  .delete(providersController.remove);

module.exports = router;