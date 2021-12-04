const express = require("express");
const router = express.Router();
const waterLevelCtrl = require("../controller/waterLevel");
const auth = require("../middleware/auth");
router.get("/data", auth, waterLevelCtrl.data);
module.exports = router;
