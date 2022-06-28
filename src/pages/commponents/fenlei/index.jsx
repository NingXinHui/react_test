import React, { Component } from "react";
import { Card, Table, Button } from "antd";
import { addClassification } from "../../../apis/network";
import Moda from "../../../components/modal";
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
// 表单数据
const items = [
  {
    type: "Input",
    label: "分类名称",
    name: "name",
    rules: [{ required: true, message: "分类名称不能为空!" }],
  },
  {
    type: "Select",
    label: "分类类型",
    name: "type",
    rules: [{ required: true, message: "分类类型不能为空!" }],
    options: [
      { label: "一级", value: "一级分类" },
      { label: "二级", value: "二级分类" },
      { label: "三级", value: "三级分类" },
    ],
  },
  // {
  //   type: "Select",
  //   label: "父级分类",
  //   name: "parentId",
  //   rules: [{ required: true, message: "分类类型不能为空!" }],
  //   options: [
  //     { label: "家用电器", value: "一级分类" },
  //     { label: "数码产品", value: "二级分类" },
  //     { label: "鞋类箱包", value: "三级分类" },
  //   ],
  // },
];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default class index extends Component {
  // async componentDidMount() {
  //   const res = await findCategroy();
  //   console.log(res);
  // }
  state = {
    isModalVisible: false,
  };
  modaVisible = (bool) => {
    this.setState({
      isModalVisible: bool,
    });
  };
  render() {
    return (
      <Card
        title="商品分类"
        extra={
          <Button
            onClick={() => {
              this.modaVisible(true);
            }}
          >
            添加
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
        <Moda
          isModalVisible={this.state.isModalVisible}
          modaVisible={this.modaVisible}
          items={items}
          addRequest={addClassification}
        ></Moda>
      </Card>
    );
  }
}
