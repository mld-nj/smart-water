const express = require("express");
const userCtrl = require("../controller/user");
const router = express.Router();
//用户注册
router.post("/register", userCtrl.register);
//用户登录
router.post("/login", userCtrl.login);
module.exports = router;
