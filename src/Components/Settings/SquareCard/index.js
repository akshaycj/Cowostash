import React, { Component } from "react";
import "./index.css";

export default class extends Component {
  render() {
    return (
      <div className="square-card">
        <img
          src={this.props.src}
          style={{ alignSelf: "center" }}
          width={50}
          height={50}
        />
        <div style={{ marginTop: 5 }}>{this.props.title}</div>
      </div>
    );
  }
}
