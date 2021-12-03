const { verify } = require("../util/jwt");
const { User } = require("../model/index");
module.exports = async (req, res, next) => {
  const token = req.get("token") || null;
  if (!token) {
    return res.status(401).send("token缺失").end();
  }
  try {
    const decodedToken = await verify(token);
    const user = await User.findById(decodedToken.userId);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
