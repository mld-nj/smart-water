const express = require("express");
const userCtrl = require("../controller/user");
const userVlidator = require("../validator/user");
const auth = require("../middleware/auth");
const router = express.Router();
//用户注册
router.post("/register", userVlidator.register, userCtrl.register);
//用户登录
router.post("/login", userVlidator.login, userCtrl.login);
//用户是否登录
router.get("/isLogin", auth, userCtrl.isLogin);
module.exports = router;
