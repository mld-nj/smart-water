const Fs = require("fs");
const CsvReadableStream = require("csv-reader");
const { WaterLevel } = require("./model/index");
require("./model/index");
let inputStream = Fs.createReadStream("./csvData/zk17-data.csv", "utf8");
let readCount = 0;
inputStream
  .pipe(
    new CsvReadableStream({
      parseNumbers: true,
      parseBooleans: true,
      trim: true,
    })
  )
  .on("data", async function (row) {
    readCount++;
    if (readCount > 12) {
      let waterLevel = new Object();
      waterLevel = {
        name: "zk17",
        date: row[0],
        time: row[1],
        ms: row[2],
        level: row[3],
        temperature: row[4],
      };
      const waterLeveldb = new WaterLevel(waterLevel);
      try {
        await waterLeveldb.save();
      } catch (err) {
        console.log("数据保存失败");
      }
    }
  })
  .on("end", function () {
    console.log("No more rows!");
  });
