import React, { Component } from "react";
import "./index.css";
import { Tabs } from "antd";
import SquareCard from "../SquareCard";
import box from "../../../Res/box.png";
import guest from "../../../Res/guest.png";
import employee from "../../../Res/employee.png";
import maintenance from "../../../Res/maintenance.png";
import teamwork from "../../../Res/teamwork.png";
import ThemeEdit from "./ThemeEdit"
import {Switch} from "antd"
import NdaTab from "./NdaTab"
import Staffs from "./Staffs"
import Ipad from "./IpadTheme"

const TabPane = Tabs.TabPane;


export default class extends Component {
  constructor(props){
    super(props)
    this.state={
     
    }
  }
  onPhotoCaptureTRiggered=(e)=>{
    
  }
  render() {
    return (
      <div className="card-container">
        <Tabs type="card" defaultActiveKey="2">
          <TabPane tab="Tablet Theme" key="1">
            <div>
              <div
                className="theme-button"
                style={{ width: 100, marginLeft: "auto" }}
              >
                Save
              </div>
              <ThemeEdit/>
              <div />
            </div>
          </TabPane>
          <TabPane tab="Visitor Purpose" key="2">
            <div>
              <div
                className="theme-button"
                style={{ width: 150, marginLeft: "auto" }}
              >
                Add Purpose +
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  padding: 10,
                  margin: 15
                }}
              >
                <SquareCard title="Interview" src={teamwork} />
                <SquareCard title="Guest" src={guest} />
                <SquareCard title="Vendor" src={box} />
                <SquareCard title="Employee" src={employee} />
                <SquareCard title="Maintenance" src={maintenance} />
                <SquareCard title="Interview" src={teamwork} />
                <SquareCard title="Guest" src={guest} />
                <SquareCard title="Vendor" src={box} />
                <SquareCard title="Employee" src={employee} />
                <SquareCard title="Maintenance" src={maintenance} />
              </div>
            </div>
          </TabPane>
          <TabPane tab="Photo Capture" key="3">
            <div style={{display:"flex"}}><h3>Enable Photo Capture</h3><Switch style={{backgroundColor:"black",marginLeft:"10%"}} onChange={this.onPhotoCaptureTRiggered}/></div>
          </TabPane>

          <TabPane tab="NDA" key="4">
            <NdaTab/>
          </TabPane>
          <TabPane tab="Badge Settings" key="5">
            <div />
          </TabPane>
          <TabPane tab="Staffs" key="6">
                <Staffs/>
          </TabPane>
          <TabPane tab="ipad" key="7">
            <Ipad />
          </TabPane>

        </Tabs>
      </div>
    );
  }
}
