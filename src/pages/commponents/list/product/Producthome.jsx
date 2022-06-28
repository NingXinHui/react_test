import React, { Component } from "react";
import { Card, Table, Button, Select, Input } from "antd";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "年龄",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "地址",
    dataIndex: "address",
  },
  {
    title: "操作",
    render: (tags) => (
      <>
        <Button type="dashed">删除</Button>
      </>
    ),
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default class Producthome extends Component {
  state = {
    serchType: "",
    serchData: "",
  };
  searchByFiled = () => {
    const { serchType, serchData } = this.state;
    console.log(serchType, serchData);
    //发送请求
  };
  render() {
    const search = (
      <span>
        <Select
          style={{ width: "150px" }}
          onChange={(value) => this.setState({ serchType: value })}
          value={this.state.serchType}
        >
          <Select.Option value="name">按名字搜索</Select.Option>
          <Select.Option value="title">按描述搜索</Select.Option>
        </Select>
        <Input
          style={{ width: "150px", margin: "0px 15px" }}
          placeholder="请输入名字或描述"
          onChange={(event) => this.setState({ serchData: event.target.value })}
          value={this.state.serchData}
        />
        <Button onClick={this.searchByFiled} type="default">
          搜索
        </Button>
      </span>
    );
    return (
      <div>
        <Card
          title={search}
          extra={
            <Button>
              <Link to={"/home/product/list/add"}>添加</Link>
            </Button>
          }
          style={{ width: "100%", height: "800px" }}
        >
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ total: 100 }}
            scroll={{ y: 320 }}
            size={"small"}
            bordered={true}
          />
        </Card>
      </div>
    );
  }
}
