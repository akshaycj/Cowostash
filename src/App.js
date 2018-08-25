import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./Components/Box";
import { DatePicker } from "antd";
import Graph from "./Components/Graph";
import Calendar from "react-calendar";
import Home from './Components/Home'
import Vistor from './Components/VisitorDetailsForm'
import Digitlogin from './Components/DigitLogin'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomeScreen from './Components/HomeScreen'
import Settings from './Components/Settings'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component = {HomeScreen} />
            <Route path="/vistor" component = {Vistor} />
            <Route path="/" component ={Settings} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
