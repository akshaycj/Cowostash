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

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Vistor />
      </div>
    );
  }
}
