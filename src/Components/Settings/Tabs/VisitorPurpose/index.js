import React, { Component } from "react";
import "./index.css";
import SquareCard from "../../../SquareCard";

export default class extends Component {
  render() {
    return (
      <div className="">
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
      </div>
    );
  }
}
