import React, { Component } from "react";
import "./index.css";
import StaffSettings from "./StaffSettings"
import { Tabs } from "antd";
import AddStaff from "./AddStaff";

const TabPane = Tabs.TabPane;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      pane: { overflow: "auto", height: "100%" }
    };
  }
  render() {
    return (
      <div>
        <br />
        <div className="common-body">
          <div className="card-container">
            <Tabs type="card" defaultActiveKey="1">
              <TabPane tab="Add Staff" key="1">
                <div style={this.style.pane}>
                  <AddStaff />
                </div>
              </TabPane>
              <TabPane tab="Staff Settings" key="2">
                <StaffSettings/>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
