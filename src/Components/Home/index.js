import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
import logo from '../../Res/logo.svg'
import './index.css'
import door from '../../Res/door.svg'
import roc from '../../Res/rocket.svg'
import staff from '../../Res/staff.svg'
import events from '../../Res/ticket.svg'
import allpep from '../../Res/users.svg'
import email from '../../Res/email.svg'
import MainContent from '../MainContent'


const { Header, Content, Footer, Sider } = Layout;
export default class App extends Component {

  render() {
    return (
      <div>
        <Layout className="main-layout" >
          <Sider
          className="main-sider"
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="header-logo">
                <img src={logo} style={{marginRight:5}} />
                <div className="compname" >Company Name</div>
            </div>
            <Menu mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">
                <img src={logo} />
                <span className="nav-text">Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <img src={door} />
                <span className="nav-text">Check-ins</span>
              </Menu.Item>
              <Menu.Item key="3">
                <img src={roc} />
                <span className="nav-text">Accelerator</span>
              </Menu.Item>
              <Menu.Item key="4">
                <img src={staff} />
                <span className="nav-text">Staff</span>
              </Menu.Item>
              <Menu.Item key="5">
                <img src={events} />
                <span className="nav-text">Events</span>
              </Menu.Item>
              <Menu.Item key="6">
                <img src={allpep} />
                <span className="nav-text">All Users</span>
              </Menu.Item>
              <Menu.Item key="7">
                <img src={email} />
                <span className="nav-text">Emails</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <MainContent />
        </Layout>
      </div>
    );
  }
}
