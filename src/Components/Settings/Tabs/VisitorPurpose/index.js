import React, { Component } from "react";
import "./index.css";
import SquareCard from "../../../SquareCard";

import box from "../../../../Res/box.png";
import guest from "../../../../Res/guest.png";
import employee from "../../../../Res/employee.png";
import maintenance from "../../../../Res/maintenance.png";
import teamwork from "../../../../Res/teamwork.png";
import AddField from "../../AddField";

export default class extends Component {
  state = {
    addField: false
  };
  onEnable = a => {
    console.log("sss--", a);
  };
  onAddField = () => {
    this.setState({ addField: true });
  };
  onGoback = () => {
    this.setState({ addField: false });
  };
  render() {
    return (
      <div className="">
        {this.state.addField ? (
          <AddField onGoback={this.onGoback} />
        ) : (
          <div>
            <div
              className="theme-button"
              onClick={this.onAddField}
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
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Interview"
                src={teamwork}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Guest"
                src={guest}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Vendor"
                src={box}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Employee"
                src={employee}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Maintenance"
                src={maintenance}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Interview"
                src={teamwork}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Guest"
                src={guest}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Vendor"
                src={box}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Employee"
                src={employee}
              />
              <SquareCard
                onValue={this.onEnable.bind(this)}
                title="Maintenance"
                src={maintenance}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
