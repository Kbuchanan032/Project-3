const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findByEmail)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findUserInfo)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/login")
  .post(usersController.verifyUser)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;