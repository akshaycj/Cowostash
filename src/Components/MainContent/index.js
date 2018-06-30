import React, { Component } from "react";
import "./index.css";
import Box from "../Box";
import Graph from "../Graph";
import Calendar from "react-calendar";
import { Breadcrumb,Badge,Icon } from "antd";

export default class extends Component {
  render() {
    return (
      <div>
        <div className="head-nav">
          <div>
            <Breadcrumb separator=">">
              <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
              <Breadcrumb.Item >Check-ins</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="container" style={{alignItems:'center'}} >
              <div className="date-text" >
                 2 May, 2018 04:20 PM
              </div>
                <Badge count={3} style={{backgroundColor:"#000"}} >
                    <Icon type="bell" />
                </Badge>
          </div>
        </div>
        <div className="container">
          <Box top="Check-ins Today" main="98" />
          <Box top="Total Check-ins" main="5322" />
          <Box top="User Registered" main="463" />
        </div>
        <div className="container" style={{ marginLeft: 20 }}>
          <Graph />
          <div style={{ marginLeft: 40 }}>
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}
