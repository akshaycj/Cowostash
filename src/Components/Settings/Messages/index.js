import React, { Component } from "react";
import "./index.css";
import { Tabs } from "antd";
import VisitorEmail from "./VisitorEmail";
import VisitorSMS from "./VisitorSMS";

const TabPane = Tabs.TabPane;

export default class extends Component {
  style = {
    pane: { overflow: "auto" }
  };

  render() {
    return (
      <div className="">
        <br />
        <div className="common-body">
          <div className="card-container">
            <Tabs type="card" defaultActiveKey="1">
              <TabPane tab="Visitor Email" key="1">
                <div style={this.style.pane}>
                  <VisitorEmail />{" "}
                </div>
              </TabPane>
              <TabPane tab="Visitor SMS" key="2">
                <div style={this.style.pane}>
                  {" "}
                  <VisitorSMS />{" "}
                </div>
              </TabPane>
              <TabPane tab="Configuration" key="3">
                <div style={this.style.pane}>sd</div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
