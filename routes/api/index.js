const router = require("express").Router();
const bookRoutes = require("./shelters");

// Book routes
router.use("/shelters", bookRoutes);

module.exports = router;
