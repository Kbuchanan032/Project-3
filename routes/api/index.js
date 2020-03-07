const router = require("express").Router();
const shelter = require("./shelters");

// Book routes
router.use("/shelters", bookRoutes);

module.exports = router;
