import React, { Component } from "react";
import "./index.css";
import { Switch } from "antd";

export default class extends Component {
  render() {
    return (
      <div className="">
        <div className="message-tab-common-container">
          <div className="item">
            Enable email <Switch />
          </div>

          <div className="item">
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
