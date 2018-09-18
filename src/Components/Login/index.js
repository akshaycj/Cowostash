import React, { Component } from "react";
import "./index.css";
import { Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import logo from "../../Res/textlogo.png";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }
  render() {
    return (
      <div className="login-main-container">
        <div className="login-main">
          <img src={logo} className="login-logo" />
          <Input placeholder="Email" />
          <Input placeholder="Password" style={{ marginTop: 30 }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 30
            }}
          >
            <Checkbox style={{ width: "50%" }}>Remember me</Checkbox>
            <a>Forgot Password?</a>
          </div>

          <Link to="/dashboard">
            <div
              className="theme-button"
              style={{ marginTop: 30, width: 200, padding: 10, height: 50 }}
            >
              Login
            </div>
          </Link>
          <div style={{ marginTop: 30 }}>
            Don't have an account? <a>Sign up</a> now
          </div>
        </div>
      </div>
    );
  }
}
