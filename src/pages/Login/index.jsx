import React, { Component } from "react";
import "./login.less";
import { Form, Input, Button, Checkbox, message } from "antd";
import {Storage} from "../../utils/storage";

export default class Login extends Component {
  state = {
    userName: "Admin",
    passWord: "123456",
  };
  onFinish = (values) => {
    const { username, password } = values;
    if (this.state.userName === username && this.state.passWord === password) {
      Storage.setStorage("token", "author abc123abc123"); //设置token
      message.success("登录成功", 2);
      setTimeout(() => {
        this.props.history.push("/home");
      }, 2000);
    } else {
      message.error("账户名或密码不正确!");
    }
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    // const img = require("./image/login.png").default;
    return (
      <div className="login">
        {/* <img
          src="https://www.google.com/logos/doodles/2022/toots-thielemans-100th-birthday-6753651837109398.2-sh.png"
          alt=""
        /> */}
        <img
          className="Img"
          src="https://www.woniuxy.com/static/woniuopen/img/home-bg.svg"
          alt=""
        />
        <div className="box">
          <div>
            <div className="logo">
              <img src={require("./image/store.png").default} alt="" />
            </div>
            <p>蜗牛商城管理系统</p>
            <Form
              name="basic"
              labelCol={{
                span: 5,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                  {
                    pattern: /^[a-z-A-Z0-9_]+$/,
                    message: "用户名必须是字母和数字!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 2,
                    message: "用户名长度必须大于2",
                  },
                  {
                    max: 10,
                    message: "用户名长度必须小于10",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <img
          className="Imgbottom"
          src="https://www.woniuxy.com/static/woniuopen/img/RecommendedCourses-bg.png"
          alt=""
        />
      </div>
    );
  }
}
