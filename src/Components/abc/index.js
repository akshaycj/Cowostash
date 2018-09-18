import "./login.css";
import axios from "axios";
import cookie from "react-cookies";

import {
  Button,
  Checkbox,
  Col,
  FormGroup,
  Grid,
  Image,
  Row
} from "react-bootstrap";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import Util from "../../Utils";
import API from "../../Api";
const signupUrl = "";
const api = "cowostash-dashboard.herokuapp.com";
const tokenAPI = new API({ url: api });
const Utils = new Util();
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMsg: "",
      alertType: "success",
      checkboxValue: false,
      emailId: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}
  handleEmailChange(event) {
    this.setState({
      emailId: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      checkboxValue: !this.state.checkboxValue
    });
  }

  handleLoginClick = () => {
    let auth;
    auth = {
      email: this.state.emailId,
      password: this.state.password
    };

    cookie.save("JWTToken", 1234);
    var token = cookie.load("JWTToken");
    console.log("token:", token);

    axios.get(api, auth, {
      headers: { Authorization: "Bearer " + token }
    });

    // tokenAPI.createEntity({ name: "user_token" });
    // tokenAPI.endpoints.user_token
    //   .create({ auth })
    //   .then(({ data }) => {
    //     Utils.setSessionToken("JWTToken", data.jwt);
    //     Utils.setSessionToken("comapnyId", data.company_id);
    //     Utils.setSessionToken("userId", data.user_id);
    //     if (this.state.checkboxValue) {
    //       Utils.setCookie("JWTToken", data.jwt);
    //       Utils.setCookie("comapanyId", data.company_id);
    //       Utils.setCookie("userId", data.user_id);
    //     }
    //     console.log("done");
    //   })
    //   .catch(error => {
    //     Utils.displayNotification(error.response.data.error, "Error", "error");
    //   });
  };

  handleLoginClickk() {
    if (this.state.emailId && Utils.emailValidation(this.state.emailId)) {
      if (this.state.password) {
        let auth;
        auth = {
          email: this.state.emailId,
          password: this.state.password
        };
        tokenAPI.createEntity({ name: "user_token" });
        tokenAPI.endpoints.user_token
          .create({ auth })
          .then(({ data }) => {
            Utils.setSessionToken("JWTToken", data.jwt);
            Utils.setSessionToken("comapnyId", data.company_id);
            Utils.setSessionToken("userId", data.user_id);
            if (this.state.checkboxValue) {
              Utils.setCookie("JWTToken", data.jwt);
              Utils.setCookie("comapanyId", data.company_id);
              Utils.setCookie("userId", data.user_id);
            }
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
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="login__container">
            <Col xs={12} md={5} className="login__block">
              <a href="/">
                <Image
                  src={require("../../Res/logo.svg")}
                  className="login__block--logo"
                  alt="Company logo"
                />
              </a>
              <form className="login__form">
                <FormGroup>
                  <input
                    className="login__form--textbox"
                    placeholder="Email"
                    type="email"
                    onChange={this.handleEmailChange}
                    value={this.state.emailId}
                    required={true}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    className="login__form--textbox"
                    placeholder="Password"
                    type="password"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                    required={true}
                  />
                </FormGroup>
                <div className="container__flex">
                  <Checkbox
                    className="login__form--checkbox"
                    onClick={this.handleChange}
                  >
                    {" "}
                    Remember Me
                  </Checkbox>
                  <Link
                    to="/forgot_password"
                    className="login__form--forgotpass"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Button
                  className="login__form--button"
                  type="button"
                  onClick={this.handleLoginClick}
                >
                  Login
                </Button>
                <p className="login__form--signuptext">
                  Don't have an account?
                  <a href={signupUrl} className="login__form--signuplink">
                    {" "}
                    Sign up
                  </a>{" "}
                  now
                </p>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
