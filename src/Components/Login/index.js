import React, { Component } from "react";
import "./index.css";
import { Input, Checkbox } from "antd";
import { Link, Redirect } from "react-router-dom";
import logo from "../../Res/textlogo.png";
import Util from "../../Utils";
import axios from "axios";

const Utils = new Util();

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      checkboxValue: false,
      redirect: false
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

  onCheck = e => {
    this.setState({ checkboxValue: e.target.checked });
  };

  onLogin = () => {
    var that = this;

    if (this.state.email && Utils.emailValidation(this.state.email)) {
      if (this.state.pass) {
        let auth;
        auth = {
          auth: {
            email: this.state.email,
            password: this.state.pass
          }
        };
        fetch(
          "https://cowostash-staging-app.herokuapp.com/dashboard/user_token",
          {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(auth)
          }
        )
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log("data", data);

            Utils.setSessionToken("JWTToken", data.jwt);
            Utils.setSessionToken("comapnyId", data.company_id);
            Utils.setSessionToken("userId", data.user_id);
            if (this.state.checkboxValue) {
              Utils.setCookie("JWTToken", data.jwt);
              Utils.setCookie("comapanyId", data.company_id);
              Utils.setCookie("userId", data.user_id);
            }
            if (data.jwt) {
              that.setState({ redirect: true });
            }
            //that.setState({ redirect: true });
            console.log("done");
          })
          .catch(error => {
            Utils.displayNotification(
              error.response.data.error,
              "Error",
              "error"
            );
          });
      } else {
        Utils.displayNotification(
          "Please enter your password",
          "Error",
          "error"
        );
      }
    } else {
      Utils.displayNotification(
        "Please enter valid email id",
        "Error",
        "error"
      );
    }
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
            type="password"
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
            <Checkbox onChange={this.onCheck} style={{ width: "50%" }}>
              Remember me
            </Checkbox>
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
          {this.state.redirect ? <Redirect to="/dashboard" /> : null}
          <div style={{ marginTop: 30 }}>
            Don't have an account? <a>Sign up</a> now
          </div>
        </div>
      </div>
    );
  }
}
