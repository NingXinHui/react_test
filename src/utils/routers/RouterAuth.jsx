import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
export default class RouterAuth extends Component {
  render() {
    //获取到路由数据
    console.log(this.props);
    const { routes, location } = this.props;
    const { pathname } = location;
    const token = localStorage.getItem("token");
    debugger
    /*
     * 发送请求判断token是否过期
     * 判断pathname是否和routes路由配置匹配
     */
    const targetRouterConfig = routes.find((item) => {
      return item.path.replace(/\s*/g, "") === pathname;
    });
    if (targetRouterConfig) {
      const { component } = targetRouterConfig;
      if (targetRouterConfig.auth) {
        //token不为空代表登陆过
        if (token) {
          return <Route path={pathname} component={component}></Route>;
        } else {
          return <Redirect to={"/login"}></Redirect>;
        }
      } else {
        return <Route path={pathname} component={component}></Route>;
      }
    } else {
      return <Redirect to={"/error"}></Redirect>;
    }
  }
}
