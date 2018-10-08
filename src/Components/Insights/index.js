import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import { DatePicker, Input } from "antd";
import { Cascader } from "antd";
const options = [
  {
    value: "zhejiang",
    label: "Zhejiang"
  },
  {
    value: "jiangsu",
    label: "Jiangsu"
  }
];

const { RangePicker } = DatePicker;
const Search = Input.Search;

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
      staff: "jon snow",
      chartdata: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Visits",
            backgroundColor: ["purple", "blue", "red"],
            size: "default",
            data: [10, 40, 5]
          }
        ]
      }
    };
  }
  onChange = value => {
    console.log(value);
  };
  onClick = () => {};

  render() {
    return (
      <div>
        <div className="Insight-header">
          <div className="checkin-tab">
            <Search
              placeholder="search"
              onSearch={value => console.log(value)}
              className="insight-search"
            />
            <div className="checkin-Cascader">
              <Cascader
                options={options}
                style={{ width: "100px", marginRight: "10px" }}
                onChange={this.onChange}
                placeholder="Staffs"
              />
              <Cascader
                options={options}
                style={{ width: "140px", marginRight: "10px" }}
                onChange={this.onChange}
                placeholder="Department"
              />
            </div>
          </div>
          <div className="checkin-daybar">
            <h4 style={{ marginRight: "10px" }} className="day-bar">
              Day
            </h4>
            <h4 style={{ marginRight: "10px" }} className="day-bar">
              Week
            </h4>
            <h4 style={{ marginRight: "10px" }} className="day-bar">
              Month
            </h4>
            <h4 style={{ marginRight: "10px" }} className="day-bar">
              Year
            </h4>
          </div>
          <RangePicker
            style={{
              width: "250px",
              display: "flex",
              alignSelf: "auto",
              alignItems: "center"
            }}
            size="small"
          />
        </div>
        <br />

        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            margin: "10px",
            padding: 10,
            justifyContent: "space-between"
          }}
        >
          <div className="Insight-Profile">
            <div style={{ display: "flex" }}>
              <img
                src="http://tachyons.io/img/logo.jpg"
                className="badge-image"
                alt="avatar"
              />
              <div>
                <h3 style={{ position: "relative", left: "25px" }}>
                  {this.state.name}
                </h3>
                <div style={{ display: "flex" }}>
                  <h4
                    style={{
                      position: "relative",
                      left: "25px",
                      bottom: "10px"
                    }}
                  >
                    {this.state.date}
                  </h4>
                  <h4
                    style={{
                      position: "relative",
                      left: "30px",
                      bottom: "10px"
                    }}
                  >
                    {this.state.time}
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 style={{ color: "#6B6767" }}>Purpose:</h5>
                <h5 style={{ position: "relative", left: "5px" }}>
                  {this.state.purpose}
                </h5>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 style={{ color: "#6B6767" }}>Staff:</h5>
                <h5 style={{ position: "relative", left: "5px" }}>
                  {this.state.staff}
                </h5>
              </div>
            </div>
            <Link style={{ color: "black" }} to="/checkinprofile">
              <div className="Insight-button" onClick={this.onClick}>
                Details
              </div>
            </Link>
          </div>
          {this.state.data.map(item => (
            <div className="" />
          ))}
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "auto"
            }}
          >
            <div className="insight-card">
              <Line
                height="70%"
                width="100%"
                type="line"
                data={this.state.chartdata}
              />
            </div>
            <div className="insight-card">
              <Doughnut height="70%" width="100%" data={this.state.chartdata} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
