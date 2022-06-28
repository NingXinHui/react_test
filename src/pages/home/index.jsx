import React, { Component } from "react";
import "./home.css";
import Menu from "../../components/menu";
import Bread from "../../components/breadcrumb";
import { Layout, Modal, Button } from "antd";
import RouterView from "../../utils/routers/RouterViews";

const { Header, Content, Sider } = Layout;

export default class home extends Component {
  state = {
    isModalVisible: false,
  };
  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  //退出
  handleOk = () => {
    this.setState(
      {
        isModalVisible: false,
      },
      () => {
        this.props.history.replace("/login");
        localStorage.clear();
      }
    );
  };
  //取消
  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  render() {
    let { Routes } = this.props;
    return (
      <Layout style={{ height: "100vh" }}>
        <Header className="header">
          <div className="logo" style={{ color: "white", padding: "0px" }}>
            logo
          </div>
          <div className="information">
            <span style={{ margin: "0px 20px" }}>你好 [小明]</span>
            <Button type="primary" onClick={this.showModal}>
              退出
            </Button>
            <Modal
              title="退出系统"
              visible={this.state.isModalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <h2>你确定要退出吗？</h2>
            </Modal>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <div>
              <Menu
                defaultSelectedKeys={[this.props.history.location.pathname]}
              ></Menu>
            </div>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Bread></Bread>
            <Content
              className="site-layout-background"
              style={{
                // padding: "0px 20px 20px 20px",
                margin: 0,
                minHeight: 280,
              }}
            >
              <RouterView Routes={Routes}></RouterView>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
