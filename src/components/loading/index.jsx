import React, { Component } from "react";
import { Spin } from "antd";
export default class Loading extends Component {
  render() {
    return (
      <div className="example" style={{ margin: "0px auto" }}>
        <Spin size="large" />
      </div>
    );
  }
}
