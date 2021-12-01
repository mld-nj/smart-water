const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/smartWater";
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log("数据库连接失败", err);
});
db.once("open", () => {
  console.log("数据库连接成功");
});
module.exports = {
  WaterLevel: mongoose.model("WaterLevel", require("./waterLevel")),
};
