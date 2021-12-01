const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router/index");
const errHandler = require("./middleware/errHandler");
const app = express();
//配置日志输出
app.use(morgan("dev"));
//配置跨域
app.use(cors());
//配置解析请求体
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use("/api", router);
app.use(errHandler());
app.listen(PORT, () => {
  console.log("smart-ground-water is running");
});
