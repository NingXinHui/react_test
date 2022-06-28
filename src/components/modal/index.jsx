import React, { Component } from "react";
import { Modal, Form, Input, Button, Select, message } from "antd";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 16,
  },
};
export default class Moda extends Component {
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
  handleOk = () => {
    this.props.modaVisible(false);
  };

  handleCancel = () => {
    this.props.modaVisible(false);
  };

  onFinish = async (values) => {
    console.log(values);
    const res = await this.props.addRequest(values);
    if (res.status === 201) {
      message.success("添加成功", 2);
      setTimeout(() => {
        this.props.modaVisible(false);
        this.formRef.current.resetFields(); //清空表单
      }, 1500);
    }
  };
  render() {
    const { items } = this.props;
    const formItems = items.map((item) => {
      const { type, name, label, rules, options } = item;
      let Component = null;
      switch (type) {
        case "Input":
          Component = (
            <Form.Item key={name} name={name} label={label} rules={rules}>
              <Input />
            </Form.Item>
          );
          break;
        case "Select":
          Component = (
            <Form.Item key={name} name={name} label={label} rules={rules}>
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.onGenderChange}
                allowClear
              >
                {options.map((option) => {
                  const { label, value } = option;
                  return (
                    <Option value={value} key={label}>
                      {label}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          );
          break;
        default:
          break;
      }
      return Component;
    });

    return (
      <Modal
        title="添加商品"
        visible={this.props.isModalVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={800}
      >
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
        >
          {formItems}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
