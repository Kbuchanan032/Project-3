const router = require("express").Router();
const shelterRoutes = require("./shelters");
const userRoutes = require("./users");
const providerRoutes = require("./providers");
const authRoutes = require('./auth')

// Book routes
router.use("/shelters", shelterRoutes);
router.use('/users', userRoutes);
router.use('/providers', providerRoutes)
router.use('/auth', authRoutes)

module.exports = router;
