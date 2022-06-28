import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";
let routerConfig = {
  "/home": "主页",
  "/home/user": "用户管理",
  "/home/shop": "店铺管理",
  "/home/role": "角色权限",
  "/home/product": "商品管理", //
  "/home/product/list": "商品列表",
  "/home/product/fenlei": "商品分类",
  "/home/finance": "财务数据", //
  "/home/finance/flows": "流水信息",
  "/home/finance/sales": "销售数据",
};
let UNLISTEN;
class Bread extends Component {
  state = {
    BreadArray: [],
  };
  componentDidMount() {
    this.getPath();
    //给路由绑定监听器 一旦发生变换 调用一次getpath
    UNLISTEN = this.props.history.listen(() => {
      this.getPath();
    });
  }
  //组件销毁
  componentWillUnmount() {
    //短路运算符 前面true后面的代码执行
    UNLISTEN && UNLISTEN();
  }
  getPath = () => {
    let { BreadArray } = this.state;
    //获取到路由地址
    const res = this.props.history.location.pathname
      .split("/")
      .filter((item) => item);
    //匹配地址
    BreadArray = res.map((_, index) => {
      //遍历的时候拼接一个url地址
      let url = `/${res.slice(0, index + 1).join("/")}`;
      return <Breadcrumb.Item key={url}>{routerConfig[url]}</Breadcrumb.Item>;
    });
    this.setState({
      BreadArray,
    });
  };
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: "12px 0" }}>
          {this.state.BreadArray}
        </Breadcrumb>
      </div>
    );
  }
}
export default withRouter(Bread);
