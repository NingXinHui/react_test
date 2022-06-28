import React, { Component } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  WindowsOutlined,
  UserSwitchOutlined,
  WalletOutlined,
  SafetyOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

export default class Menus extends Component {
  render() {
    const { defaultSelectedKeys } = this.props; // 导航刷新选中
    return (
      <div style={{ width: 200, display: "inline-block" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[...defaultSelectedKeys]}
          defaultOpenKeys={["sub1", "sub2"]}
          style={{ height: "100%", borderRight: 0 }}
          theme="dark"
        >
          <Menu.Item key="/home/main" icon={<WindowsOutlined />}>
            <Link to="/home/main">首页</Link>
          </Menu.Item>
          <Menu.Item key="/home/user" icon={<UserSwitchOutlined />}>
            <Link to="/home/user">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="/home/shop" icon={<WalletOutlined />}>
            <Link to="/home/shop">店铺管理</Link>
          </Menu.Item>
          <Menu.Item key="/home/role" icon={<SafetyOutlined />}>
            <Link to="/home/role">角色权限</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="商品管理">
            <Menu.Item key="/home/product/list">
              <Link to="/home/product/list">商品列表</Link>
            </Menu.Item>
            <Menu.Item key="/home/product/fenlei">
              <Link to="/home/product/fenlei">商品分类</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="财务数据">
            <Menu.Item key="/home/finance/flows">
              <Link to="/home/finance/flows">流水信息</Link>
            </Menu.Item>
            <Menu.Item key="/home/finance/sales">
              <Link to="/home/finance/sales">销售数据</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
