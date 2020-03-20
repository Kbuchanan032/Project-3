const router = require("express").Router();
const shelterRoutes = require("./shelters");
const userRoutes = require("./users");
const providerRoutes = require("./providers");

// Book routes
router.use("/shelters", shelterRoutes);
router.use('/users', userRoutes);
router.use('/providers', providerRoutes)

module.exports = router;
