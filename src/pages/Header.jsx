import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  logout = () => {
    // console.log(this.props);
    this.props.history.replace("/login");
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.logout();
          }}
          style={{ float: "right" }}
        >
          退出登录
        </button>
      </div>
    );
  }
}
export default withRouter(Header);
