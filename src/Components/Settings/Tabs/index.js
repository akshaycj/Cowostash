import React, { Component } from "react";
import "./index.css";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

export default class extends Component {
  render() {
    return (
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Tablet Theme" key="1">
            <div />
          </TabPane>
          <TabPane tab="Visitor Purpose" key="2">
            <div />
          </TabPane>
          <TabPane tab="Photo Capture" key="3">
            <div />
          </TabPane>

          <TabPane tab="NDA" key="4">
            <div />
          </TabPane>
          <TabPane tab="Badge Settings" key="5">
            <div />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
