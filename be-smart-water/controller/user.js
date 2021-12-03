const { User } = require("../model/index");
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
  res.send("login").end();
};
