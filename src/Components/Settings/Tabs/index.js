import React, { Component } from "react";
import "./index.css";
import { Tabs } from "antd";
import SquareCard from "../../SquareCard";
import box from "../../../Res/box.png";
import guest from "../../../Res/guest.png";
import employee from "../../../Res/employee.png";
import maintenance from "../../../Res/maintenance.png";
import teamwork from "../../../Res/teamwork.png";
import ThemeEdit from "./ThemeEdit";
import { Switch } from "antd";
import NdaTab from "./NdaTab";
import Staffs from "./Staffs";
import { Link } from "react-router-dom";
import Badge from "./BadgeTab";
import VistorPurpose from "./VisitorPurpose";

const TabPane = Tabs.TabPane;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      pane: { overflow: "auto", height: "100%" }
    };
  }
  onEnable = a => {
    console.log("sss--", a);
  };
  onPhotoCaptureTRiggered = e => {};
  render() {
    return (
      <div className="card-container">
        <Tabs type="card" defaultActiveKey="1">
          <TabPane tab="Tablet Theme" key="1">
            <div style={this.style.pane}>
              <ThemeEdit />
              <div />
            </div>
          </TabPane>
          <TabPane tab="Visitor Purpose" key="2">
            <VistorPurpose />
          </TabPane>
          <TabPane tab="Photo Capture" key="3">
            <div style={{ display: "flex" }}>
              <h3>Enable Photo Capture</h3>
              <Switch
                style={{ backgroundColor: "black", marginLeft: "10%" }}
                onChange={this.onPhotoCaptureTRiggered}
              />
            </div>
          </TabPane>

          <TabPane tab="NDA" key="4">
            <NdaTab />
          </TabPane>
          <TabPane tab="Badge Settings" key="5">
            <Badge />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
