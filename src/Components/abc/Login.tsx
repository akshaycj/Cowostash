import * as React from "react";

import "../Login/login.css";

import Utils from '../../../src/Utils';
import API from "../../Api";

import {
  Button,
  Checkbox,
  Col,
  FormGroup,
  Grid,
  Image,
  Row
} from "react-bootstrap";
import { Link } from 'react-router-dom';

interface IState {
  alertMsg: string;
  alertType: string;
  checkboxValue: boolean;
  emailId: string;
  password: string;
}

const signupUrl = process.env.REACT_APP_LANDING_URL + "/signup"

class Login extends React.Component<{}, IState> {
  public tokenAPI = new API({ url: process.env.REACT_APP_BASE_URL + "/dashboard" });
  constructor(props: any) {
    super(props);
    this.state = {
      alertMsg: "",
      alertType: "success",
      checkboxValue: false,
      emailId: "",
      password: "",
    } as IState;
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleEmailChange(event: any) {
    this.setState({
      emailId: event.target.value
    });
  }

  public handlePasswordChange(event: any) {
    this.setState({
      password: event.target.value
    });
  }

  public handleChange(event: any) {
    this.setState({
      checkboxValue: !this.state.checkboxValue
    });
  }

  public handleLoginClick() {
    if (this.state.emailId && Utils.emailValidation(this.state.emailId)) {
      if (this.state.password) {
        let auth: any;
        auth = {
          email: this.state.emailId,
          password: this.state.password
        }
        this.tokenAPI.createEntity({ name: "user_token" });
        this.tokenAPI.endpoints.user_token
          .create({ auth })
          .then(({ data }: any) => {
            Utils.setSessionToken("JWTToken", data.jwt);
            Utils.setSessionToken("comapnyId", data.company_id);
            Utils.setSessionToken("userId", data.user_id  );
            if (this.state.checkboxValue) {
              Utils.setCookie("JWTToken", data.jwt);
              Utils.setCookie("comapanyId", data.company_id);
              Utils.setCookie("userId", data.user_id);
            }
          })
          .catch((error: any) => {
            Utils.displayNotification(error.response.data.error, "Error", "error");
          });
      } else {
        Utils.displayNotification("Please enter your password", "Error", "error");
      }
    } else {
      Utils.displayNotification("Please enter valid email id", "Error", "error");
    }
  }

  public render() {
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
                  <Checkbox className="login__form--checkbox"
                    onClick={this.handleChange}>
                    {" "}Remember Me
                  </Checkbox>
                  <Link to="/forgot_password" className="login__form--forgotpass">
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
                  <a
                    href={signupUrl}
                    className="login__form--signuplink"
                  >
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

export default Login;
