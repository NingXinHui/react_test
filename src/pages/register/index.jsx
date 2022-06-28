import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Register extends Component {
  navLogin = () => {
    this.props.history.push({
      pathname: "/login",
      query: {
        id: "1",
        name: "小明",
      },
    });
  };
  render() {
    return (
      <div>
        <h1>注册</h1>
        <h2>
          {/* params、query 传递参数*/}
          <Link to={"/login/xiaoming"}>注册成功,去登录</Link>
          <br />
          <button onClick={this.navLogin}>注册成功,回到登录</button>
          <br />
          <Link to={{ pathname:"/login", query: { name: "sunny" } }}>
            注册成功,去登录
          </Link>
        </h2>
      </div>
    );
  }
}
