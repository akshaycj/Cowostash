import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import logo from "../../Res/logo.svg";
import "./index.css";
import door from "../../Res/door.svg";
import roc from "../../Res/rocket.svg";
import staff from "../../Res/staff.svg";
import events from "../../Res/ticket.svg";
import allpep from "../../Res/users.svg";
import email from "../../Res/email.svg";
import MainContent from "../MainContent";

const { Header, Content, Footer, Sider } = Layout;
export default class App extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className="main-layout">
        <Layout className="child-layout">
          <Sider
            className="main-sider"
            breakpoint="lg"
            trigger={null}
            collapsible
            style={{ color: "white" }}
            collapsed={this.state.collapsed}
          >
            <div className="header-logo">
              {/*<img src={logo} style={{ marginRight: 5 }} />*/}
              <div className="compname" />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                <Icon style={{ color: "white" }}>
                  <img src={logo} />
                </Icon>
                <span className="nav-text">Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon style={{ color: "white" }}>
                  <img src={door} />
                </Icon>
                <span className="nav-text">Check-ins</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon style={{ color: "white" }}>
                  <img src={roc} />
                </Icon>
                <span className="nav-text">Accelerator</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon style={{ color: "white" }}>
                  <img src={staff} />
                </Icon>
                <span className="nav-text">Staff</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon style={{ color: "white" }}>
                  <img src={events} />
                </Icon>
                <span className="nav-text">Events</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon style={{ color: "white" }}>
                  <img src={allpep} />
                </Icon>
                <span className="nav-text">All Users</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon style={{ color: "white" }}>
                  <img src={email} />
                </Icon>
                <span className="nav-text">Emails</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="child-layout">
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            {this.props.children}
          </Layout>
        </Layout>
      </div>
    );
  }
}

// <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
//             Content
//           </Content>
