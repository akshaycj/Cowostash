import React, { Component } from "react";
import "./index.css";
import AddField from "./AddField";
import { message } from "antd";
import Tabs from "./Tabs";

export default class extends Component {
  onSave = () => {
    message.success("New Form Added!");
  };

  render() {
    return (
      <div className="">
        <br />
        <div className="common-body">
          <Tabs />
        </div>
      </div>
    );
  }
}

// <div className="common-tab">
// <div className="tab-title">Add a new purpose form</div>
// <div className="theme-button" onClick={this.onSave}>
//   Save
// </div>
// </div>
// <br />
