import React, { Component } from "react";
import { Layout, Menu, Icon, Badge, Popover ,Tabs} from "antd";
import logo from "../../Res/logo.svg";
import "./index.css";
import { Link } from "react-router-dom";
import { List, Avatar } from 'antd';
import moment from 'moment';
import { Tag } from 'antd';

const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const data = [
  {
    id:'000000001',
    datetime: '2017-08-09',
    title: 'Ant Design Title 1',

  },
  {
    id:'000000002',
    datetime: '2017-08-08',
    title: 'Ant Design Title 2',
  },
  {
    id:'000000003',
    datetime: '2017-08-10',
    title: 'Ant Design Title 3',
  },
  {
    id:'000000004',
    datetime: '2017-08-11',
    title: 'Ant Design Title 4',  
  },
];


const { Header, Content, Footer, Sider } = Layout;
export default class App extends Component {
  state = {
    collapsed: false,
    notifications: ["asdsad", "sadas", "dasd"],
    date: "",
    Profile: [],
    dataNotifications:data,
    messageNotifications:data
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toString().slice(0, 24),
        
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
  onClickClearNotifications=()=>{
    this.setState({dataNotifications:""})
  }
  onClickClearMessages=()=>{
    this.setState({messageNotifications:""})
  }
  render() {
    const text = <span>Notifications</span>;
    const content = (
      <div>
       <Tabs defaultActiveKey="1" style={{width:"300px"}}>
    <TabPane tab="Notifications" key="1" >  <List
    itemLayout="horizontal"
    dataSource={this.state.dataNotifications}
    footer={<div style={{textAlign:"center",cursor:"pointer"}} onClick={this.onClickClearNotifications}><Icon type="delete" theme="outlined" />Clear Notifications</div>}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar><Icon type="notification" theme="filled" /></Avatar>}
          title={<a>{item.title}</a>}
          description={moment(this.state.dataNotifications.datetime).fromNow()}
   
        />
      </List.Item>
    )}
  /></TabPane>
    <TabPane tab="Messages" key="2"><List
    itemLayout="horizontal"
    dataSource={this.state.messageNotifications}
    footer={<div style={{textAlign:"center",cursor:"pointer"}} onClick={this.onClickClearMessages}><Icon type="delete" theme="outlined" />Clear Notifications</div>}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar><Icon type="mail" theme="outlined" /></Avatar>}
          title={<a>{item.title}</a>}
          description={moment(this.state.messageNotifications.datetime).fromNow()}
        />
      </List.Item>
    )}
  /></TabPane>
    
  </Tabs>
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
                <Link to="/insights">
                  <Icon style={{ fontSize: 20 }} type="pie-chart" />
                  <span className="nav-text">Insights</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/devices">
                  <Icon style={{ fontSize: 20 }} type="tablet" />
                  <span className="nav-text">Devices</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/staffs">
                  <Icon style={{ fontSize: 20 }} type="contacts" />
                  <span className="nav-text"> Staff</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon style={{ fontSize: 20 }} type="schedule" />
                <span className="nav-text">Meetings</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon style={{ fontSize: 20 }} type="table" />
                <span className="nav-text">Events</span>
              </Menu.Item>
              
             
              

              <SubMenu
                key="8"
                title={
                  <span>
                    <Icon style={{ fontSize: 20 }} type="setting" />
                    <span>Settings</span>
                  </span>
                }
              >
                <Menu.Item key="9">
                  {" "}
                  <Link to="/settings">
                    <span className="nav-text-sub"> Desk Settings</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="10">
                  <Link to="/messages">
                    <span className="nav-text-sub"> Messages</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="11">
                  <span className="nav-text-sub"> Integrations</span>
                </Menu.Item>
              </SubMenu>
              
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
