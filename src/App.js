import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./Components/Box";
import { DatePicker } from "antd";
import Graph from "./Components/Graph";
import Calendar from "react-calendar";
import Home from "./Components/Home";
import Vistor from "./Components/VisitorDetailsForm";
import Digitlogin from "./Components/DigitLogin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Settings from "./Components/Settings";
import AddField from "./Components/Settings/AddField/add";
import Login from "./Components/Login";
import Staffs from "./Components/Staffs";
import Devices from "./Components/Devices";
import Messages from "./Components/Settings/Messages";
import Checkins from "./Components/Checkins";

import CheckinProfile from "./Components/Checkins/CheckinProfile"
import Profile from "./Components/Profile";
import Insights from "./Components/Insights";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Login} />
              <Home>
                <Switch>
                <Route path="/Insights" component={Insights} />
                <Route path="/checkinprofile" component={CheckinProfile} />
                <Route path="/Profile" component={Profile} />
                <Route path="/checkins" component={Checkins} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/staffs" component={Staffs} />
                  <Route path="/digit" component={Digitlogin} />
                  <Route path="/form" component={AddField} />
                  <Route path="/home" component={HomeScreen} />
                  <Route path="/vistor" component={Vistor} />
                  <Route path="/dashboard" component={Settings} />
                  <Route path="/devices" component={Devices} />
                  <Route path="/messages" component={Messages} />
                </Switch>
              </Home>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
