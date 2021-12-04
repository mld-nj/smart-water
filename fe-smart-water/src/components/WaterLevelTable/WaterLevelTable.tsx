import { useCallback, useState, useEffect } from "react";
import { Table, Select, Input, DatePicker } from "@arco-design/web-react";
import { getLevelData } from "../../api/waterLevel";
import "./Table.scss";
const WaterLevelTable = () => {
  const columns = [
    {
      title: "水位计",
      dataIndex: "name",
    },
    {
      title: "日期",
      dataIndex: "date",
    },
    {
      title: "时刻",
      dataIndex: "time",
    },
    {
      title: "ms",
      dataIndex: "ms",
    },
    {
      title: "水位",
      dataIndex: "level",
    },
    {
      title: "温度",
      dataIndex: "temperature",
    },
  ];
  const [data, setData] = useState([]);
  const Option = Select.Option;
  const options = ["zk12", "zk7", "zk17", "zk2"];
  useEffect(() => {
    getLevelData().then((res) => {
      setData(res.data.datas);
    });
  }, []);
  return (
    <div className="tableContainer">
      <div className="filterContainer">
        <Input
          style={{ width: 200 }}
          allowClear
          addBefore="时刻"
          placeholder="请输入时刻"
        />
        <Input
          style={{ width: 200 }}
          allowClear
          addBefore="水位"
          placeholder="请输入水位"
        />
        <Input
          style={{ width: 200 }}
          allowClear
          addBefore="温度"
          placeholder="请输入温度"
        />
        <DatePicker style={{ width: 200 }} />
        <Select placeholder="Please select" style={{ width: 200 }} allowClear>
          {options.map((option, index) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};
export default WaterLevelTable;
