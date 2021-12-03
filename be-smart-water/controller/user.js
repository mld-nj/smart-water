const { User } = require("../model/index");
const { sign } = require("../util/jwt");

exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body.user);
    await user.save();
    res.status(201).json({
      user,
    });
  } catch (err) {
    next(err);
  }
  // res.send("register").end();
};
exports.login = async (req, res, next) => {
  try {
    const user = req.user;
    const token = await sign({
      userId: user._id,
    });
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
exports.isLogin = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(400).json({
        err: "无此用户",
      });
    }
    res.status(200).json({
      msg: "该用户在线",
    });
  } catch (error) {
    next(error);
  }
};
