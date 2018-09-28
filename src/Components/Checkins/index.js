import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "22",
      week: "33",
      month: "55",
      data: [],
      date: "24/05",
      time: "15:33",
      name: "sam",
      purpose: "interview",
      staff: "jon snow"
    };
  }
  onClick = () => {};

  render() {
    return (
      <div>
        <div className="checkin-header">
          <div className="Checkin-header-sub">
            <h2>Today</h2>
            <h2>{this.state.day}</h2>
          </div>
          <div className="Checkin-header-sub">
            <h2>Last 7 days</h2>
            <h2>{this.state.week}</h2>
          </div>
          <div className="Checkin-header-sub">
            <h2>This Month</h2>
            <h2>{this.state.month}</h2>
          </div>
        </div>
        <br />
        <br />
        <div className="Checkin-Profile">
          <div style={{ display: "flex" }}>
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="badge-image"
              alt="avatar"
            />
            <div>
              <h2 style={{ position: "relative", left: "25px" }}>
                {this.state.name}
              </h2>
              <div style={{ display: "flex" }}>
                <h3
                  style={{ position: "relative", left: "25px", bottom: "10px" }}
                >
                  {this.state.date}
                </h3>
                <h3
                  style={{ position: "relative", left: "30px", bottom: "10px" }}
                >
                  {this.state.time}
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h3 style={{ color: "#6B6767" }}>Purpose:</h3>
              <h3 style={{ position: "relative", left: "5px" }}>
                {this.state.purpose}
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h3 style={{ color: "#6B6767" }}>Staff:</h3>
              <h3 style={{ position: "relative", left: "5px" }}>
                {this.state.staff}
              </h3>
            </div>
          </div>
          <Link style={{ color: "black" }} to="/checkinprofile">
            <div className="Checkin-button" onClick={this.onClick}>
              Details
            </div>
          </Link>
        </div>
        {this.state.data.map(item => (
          <div className="" />
        ))}
      </div>
    );
  }
}
