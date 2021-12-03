const validator = require("../middleware/validator");
const { User } = require("../model");
const { body } = require("express-validator");
const md5 = require("../util/md5");
exports.register = validator([
  body("user.username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) {
        return Promise.reject("用户名已存在");
      }
    }),
  body("user.password").notEmpty().withMessage("密码不能为空"),
  body("user.email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式不正确")
    .bail()
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        return Promise.reject("邮箱已存在");
      }
    }),
]);
exports.login = [
  validator([
    body("user.username").notEmpty().withMessage("用户名不能为空"),
    body("user.password").notEmpty().withMessage("密码不能为空"),
    // body("user.email")
    //   .notEmpty()
    //   .withMessage("邮箱不能为空")
    //   .isEmail()
    //   .withMessage("邮箱格式不正确"),
  ]),
  validator([
    body("user.username").custom(async (username, { req }) => {
      const user = await User.findOne({ username });
      if (!user) {
        return Promise.reject("用户不存在");
      }
      req.user = user;
    }),
  ]),
  validator([
    body("user.password").custom(async (password, { req }) => {
      if (md5(password) !== req.user.password) {
        return Promise.reject("密码错误");
      }
    }),
  ]),
];
