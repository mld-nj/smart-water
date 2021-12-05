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
  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true,
    total: 96,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  const [loading, setLoading] = useState(false);
  const Option = Select.Option;
  const options = ["zk12", "zk7", "zk17", "zk2"];
  const onChangeTable = useCallback((pagination: any) => {
    const { current, pageSize } = pagination;
    setPagination((pagination) => ({
      ...pagination,
      current,
      pageSize,
    }));
  }, []);
  useEffect(() => {
    const { current, pageSize } = pagination;
    setLoading(true);
    getLevelData(current, pageSize).then((res) => {
      setData(res.data.datas);
      //   setPagination({ ...pagination, total: res.data.dataCount });
      setLoading(false);
    });
  }, [pagination]);
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
        <Select placeholder="选择水位计" style={{ width: 200 }} allowClear>
          {options.map((option, index) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
      <Table
        columns={columns}
        data={data}
        pagination={pagination}
        onChange={onChangeTable}
        loading={loading}
      />
    </div>
  );
};
export default WaterLevelTable;
