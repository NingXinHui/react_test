import React, { Component } from "react";
import { Card, Form, Input, Button, Select, InputNumber } from "antd";
import { Link } from "react-router-dom";
import Uploads from "../../../../components/upload";
const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 16,
  },
};
export default class Producthome extends Component {
  formRef = React.createRef();
  onGenderChange = (value) => {
    console.log(value);
    switch (value) {
      case "male":
        this.formRef.current.setFieldsValue({
          note: "Hi, man!",
        });
        return;
      case "female":
        this.formRef.current.setFieldsValue({
          note: "Hi, lady!",
        });
        return;
      case "other":
        this.formRef.current.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
        break;
    }
  };
  onFinish = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div>
        <div>
          <Card
            title="商品添加"
            extra={
              <Button>
                <Link to={"/home/product/list"}>返回</Link>
              </Button>
            }
            style={{ width: "100%", height: "800px" }}
          >
            <Form
              {...layout}
              ref={this.formRef}
              name="control-ref"
              onFinish={this.onFinish}
            >
              <Form.Item
                label="商品名字"
                name="name"
                rules={[{ required: true, message: "商品名字不能为空!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="商品描述"
                name="title"
                rules={[{ required: true, message: "请输入商品的基本描述!" }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="商品的分类"
                name="type"
                rules={[{ required: true, message: "请选择分类!" }]}
              >
                <Select onChange={this.onGenderChange}>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="商品价格"
                name="price"
                rules={[{ required: true, message: "请输入商品的价格" }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item label="上传图片" name="imgSrc">
                <Uploads></Uploads>
              </Form.Item>
              <Form.Item
                label="商品详情"
                name="msg"
                rules={[{ required: true, message: "填写商品详情!" }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  确认
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
