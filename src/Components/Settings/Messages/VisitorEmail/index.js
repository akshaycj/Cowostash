import React, { Component } from "react";
import "./index.css";
import { Switch } from "antd";

export default class extends Component {
  render() {
    return (
      <div className="">
        <div
          style={{
            width: "100%",
            fontSize: 18,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            Enable email <Switch />
          </div>

          <div
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10
            }}
          >
            Default email for all purpose <Switch />
          </div>
          <div
            className="theme-button"
            style={{ width: 200, marginLeft: "auto" }}
          >
            Add Email +
          </div>
        </div>
      </div>
    );
  }
}
