import React, { Component } from "react";
import "./index.css";
import { Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import logo from "../../Res/textlogo.png";

import axios from "axios";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      pass: event.target.value
    });
  }

  onLogin = () => {
    let auth;
    auth = {
      email: this.state.email,
      password: this.state.pass
    };

    fetch("https://cowostash-staging-app.herokuapp.com/dashboard/user_token", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      params: { auth: auth }
    }).then(response => {
      console.log("res", response);
    });

    //axios.post
  };
  render() {
    return (
      <div className="login-main-container">
        <div className="login-main">
          <img src={logo} className="login-logo" />
          <input
            className="login__form--textbox"
            placeholder="Email"
            onChange={this.handleEmailChange.bind(this)}
          />
          <input
            className="login__form--textbox"
            placeholder="Password"
            onChange={this.handlePasswordChange.bind(this)}
          />
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

          <div
            className="theme-button"
            style={{ marginTop: 30, width: 200, padding: 10, height: 50 }}
            onClick={this.onLogin}
          >
            Login
          </div>
          {/* <Link to="/dashboard">
          </Link> */}
          <div style={{ marginTop: 30 }}>
            Don't have an account? <a>Sign up</a> now
          </div>
        </div>
      </div>
    );
  }
}
