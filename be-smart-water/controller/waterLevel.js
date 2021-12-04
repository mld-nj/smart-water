const { WaterLevel } = require("../model/index");
exports.data = async (req, res, next) => {
  try {
    const {
      limit = 10,
      page = 1,
      name,
      date,
      time,
      sort = 1,
      level,
      temperature,
    } = req.query;
    const filter = {};
    name ? (filter.name = name) : null;
    date ? (filter.date = date) : null;
    time ? (filter.time = time) : null;
    level ? (filter.level = level) : null;
    temperature ? (filter.temperature = temperature) : null;
    const offset = (page - 1) * limit;
    const datas = await WaterLevel.find(filter)
      .skip(Number.parseInt(offset))
      .limit(Number.parseInt(limit))
      .sort({
        date: sort,
      });
    //获取数据条数总数
    const dataCount = await WaterLevel.countDocuments();
    res.status(200).json({
      datas,
      msg: "success",
      dataCount,
    });
  } catch (error) {
    next(error);
  }
};
