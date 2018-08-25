import React, { Component } from "react";
import "./index.css";
import AddField from "./AddField";
import { message } from "antd";

export default class extends Component {
  onSave = () => {
    message.success("New Form Added!");
  };

  render() {
    return (
      <div className="">
        <br />
        <div className="common-tab">
          <div className="tab-title">Add a new purpose form</div>
          <div className="theme-button" onClick={this.onSave}>
            Save
          </div>
        </div>
        <br />
        <div className="common-body">
          <AddField />
        </div>
      </div>
    );
  }
}
