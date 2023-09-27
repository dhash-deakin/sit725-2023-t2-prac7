const express = require("express");
const router = express.Router();
const formRoutes = require("./formRoutes");

router.use("/submit-form", formRoutes);

module.exports = router;
