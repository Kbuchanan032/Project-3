const router = require("express").Router();
const shelterRoutes = require("./shelters");
const userRoutes = require("./users");

// Book routes
router.use("/shelters", shelterRoutes);
router.use('/users', userRoutes);

module.exports = router;
