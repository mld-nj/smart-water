const express = require("express");
const router = express.Router();
router.use("/user", require("./user"));
router.use("/waterLevel", require("./waterLevel"));
module.exports = router;
