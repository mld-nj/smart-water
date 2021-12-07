import { useCallback, useState, useEffect } from "react";
import { Table, Select, Input, DatePicker } from "@arco-design/web-react";
import debounce from "../../utils/debounce";
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
  const [filter, setFilter] = useState({});
  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  const [total, setTotal] = useState();
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
  const handlePicker = useCallback((value) => {
    setFilter((pre) => {
      return { ...pre, date: value };
    });
  }, []);
  const handleSelect = useCallback((value: any) => {
    setFilter((pre) => {
      return { ...pre, name: value };
    });
  }, []);
  const handleInput = useCallback((value: any, e: any) => {
    const property = e.target.name;
    setFilter((pre) => {
      return { ...pre, [property]: value };
    });
  }, []);
  const dbHandleInput = debounce(handleInput, 1000);
  useEffect(() => {
    const { current, pageSize } = pagination;
    setLoading(true);
    getLevelData(current, pageSize, filter).then((res) => {
      res.data.datas.map((current: any) => {
        current["date"] = current["date"].slice(0, 10);
      });
      setData(res.data.datas);
      setTotal(res.data.dataCount);
      setLoading(false);
    });
  }, [pagination, filter]);
  return (
    <div className="tableContainer">
      <div className="filterContainer">
        <Input
          style={{ width: 200 }}
          allowClear
          addBefore="时刻"
          placeholder="请输入时刻"
          name="time"
          onChange={(value, e) => {
            dbHandleInput(value, e);
          }}
        />
        <Input
          style={{ width: 200 }}
          allowClear
          addBefore="水位"
          placeholder="请输入水位"
          name="level"
          onChange={(value, e) => {
            dbHandleInput(value, e);
          }}
        />
        <Input
          style={{ width: 200 }}
          allowClear
          addBefore="温度"
          placeholder="请输入温度"
          name="temperature"
          onChange={(value, e) => {
            dbHandleInput(value, e);
          }}
        />
        <DatePicker style={{ width: 200 }} onChange={handlePicker} />
        <Select
          placeholder="选择水位计"
          style={{ width: 200 }}
          allowClear
          onChange={(value) => {
            handleSelect(value);
          }}
        >
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
        pagination={{ ...pagination, total }}
        onChange={onChangeTable}
        loading={loading}
      />
    </div>
  );
};
export default WaterLevelTable;
