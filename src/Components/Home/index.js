import React, { Component } from "react";
import { Layout, Menu, Icon, Badge, Popover } from "antd";
import logo from "../../Res/logo.svg";
import "./index.css";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Header, Content, Footer, Sider } = Layout;
export default class App extends Component {
  state = {
    collapsed: false,
    notifications: ["asdsad", "sadas", "dasd"],
    date: "",
    Profile: []
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toString().slice(0, 24)
      });
    }, 1000);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  onClickNotification() {
    this.setState({ notifications: [] });
  }
  onClickProfile() {
    this.setState({ Profile: [] });
  }
  render() {
    const text = <span>Notifications</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    const contentProfile = (
      <div>
        <Link to="/profile">
          <p>Account Settings</p>
        </Link>
        <p>Signout</p>
      </div>
    );
    return (
      <div className="main-layout">
        <Layout className="child-layout">
          <Sider
            className="main-sider"
            breakpoint="lg"
            trigger={null}
            collapsible
            theme="light"
            style={{ color: "white" }}
            collapsed={this.state.collapsed}
          >
            <div className="header-logo">
              <span className="compname">Cowostash</span>
            </div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/dashboard">
                  <Icon style={{ color: "white" }}>
                    <img src={logo} />
                  </Icon>
                  <span className="nav-text">Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/checkins">
                  <Icon style={{ fontSize: 20 }} type="check-square" />
                  <span className="nav-text">Check-ins</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/devices">
                  <Icon style={{ fontSize: 20 }} type="tablet" />
                  <span className="nav-text">Devices</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/staffs">
                  <Icon style={{ fontSize: 20 }} type="contacts" />
                  <span className="nav-text"> Staff</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon style={{ fontSize: 20 }} type="table" />
                <span className="nav-text">Events</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon style={{ fontSize: 20 }} type="team" />
                <span className="nav-text">All Users</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon style={{ fontSize: 20 }} type="mail" />
                <span className="nav-text">Emails</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/insights">
                  <Icon style={{ fontSize: 20 }} type="pie-chart" />
                  <span className="nav-text">Insights</span>
                </Link>
              </Menu.Item>

              <SubMenu
                key="9"
                title={
                  <span>
                    <Icon style={{ fontSize: 20 }} type="setting" />
                    <span>Settings</span>
                  </span>
                }
              >
                <Menu.Item key="10">
                  {" "}
                  <Link to="/settings">
                    <span className="nav-text-sub"> Desk Settings</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="11">
                  <Link to="/messages">
                    <span className="nav-text-sub"> Messages</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="12">
                  <span className="nav-text-sub"> Integrations</span>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="13">
                <Icon style={{ fontSize: 20 }} type="schedule" />
                <span className="nav-text">Meetings</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="child-layout">
            <Header
              style={{
                background: "#fff",
                padding: 0
              }}
              className="header-shadow"
            >
              <div
                style={{
                  background: "#fff",
                  padding: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "99%"
                }}
              >
                <Icon
                  style={{ fontSize: 20 }}
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
                <div className="dateandtimenotification">
                  {this.state.date}
                  <Popover
                    placement="bottomRight"
                    title={text}
                    content={content}
                    trigger="click"
                    onClick={this.onClickNotification.bind(this)}
                  >
                    <Badge count={this.state.notifications.length}>
                      <Icon
                        style={{ fontSize: 20 }}
                        type="bell"
                        style={{ padding: 5, fontSize: 20 }}
                      />
                    </Badge>
                  </Popover>
                  <Popover
                    placement="bottomRight"
                    content={contentProfile}
                    trigger="click"
                    onClick={this.onClickProfile.bind(this)}
                  >
                    <Icon
                      style={{ fontSize: 22 }}
                      type="user"
                      style={{ padding: 6, fontSize: 22 }}
                    />
                  </Popover>
                </div>
              </div>
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
