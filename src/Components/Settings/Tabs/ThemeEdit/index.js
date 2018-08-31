import React, { Component, Fragment } from "react";
import './index.css'
import { Input, Icon } from "antd"
import SquareCard from "../../SquareCard"
import theme1 from "../../../../Res/theme1.jpg"
import theme2 from "../../../../Res/theme2.jpeg"
import theme3 from "../../../../Res/theme3.jpeg"
import logo from "../../../../Res/logo.svg"

const { TextArea } = Input;
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipadbackground: theme1,
      MainText: "Hello",
      SubText: "Select Purpose of your visit",
      TextCol: "#000",
      BackgroundCol: "#A9A9A9"
    }
  }
  onMainText = (e) => {
    this.setState({ MainText: e.target.value })
  }
  onSubText = (e) => {
    this.setState({ SubText: e.target.value })
  }
  onBackgroundColor = (e) => {
    this.setState({ BackgroundCol: e.target.value })
  }
  onTextColor = (e) => {
    this.setState({ TextCol: e.target.value })
  }
  onLogo1 = () => {
    this.setState({ipadbackground:theme1})
  }
  onLogo2 = () => {
    this.setState({ipadbackground:theme2})
  }
  onLogo3 = () => {
    this.setState({ipadbackground:theme3})
  }
  render() {

    return (
      <div className="Theme-Container" >

        <div style={{ overlayY: "scroll" }}>
          <div className="Theme-padding"><div>Upload Logo</div> <Icon style={{ fontSize: "20px" }} type="cloud-upload" /></div>
          <div className="Theme-padding"><div>Logo Background Color</div><Input style={{ height: "20px", width: "80px" }} placeholder="#000" onChange={this.onBackgroundColor} /></div>
          <div className="Theme-padding">Upload Background/Select from Templates</div>
          <div style={{ display: "flex" }}>
            <div class="pa4" onClick={this.onLogo1}>
              <img
                src={theme1}
                class="br-100" alt="avatar" />
            </div><div class="pa4" onClick={this.onLogo2}>
              <img
                src={theme2}
                class="br-100" alt="avatar" />
            </div><div class="pa4" onClick={this.onLogo3}>
              <img
                src={theme3}
                class="br-100" alt="avatar" />
            </div>
            <Icon style={{ fontSize: "30px", marginTop: "15px" }} type="cloud-upload" />
          </div>
          <Input className="Theme-padding" placeholder="Main Text" onChange={this.onMainText} />
          <TextArea className="Theme-padding" placeholder="Sub Text" onChange={this.onSubText} autosize={{ minRows: 2, maxRows: 6 }} />
          <div className="Theme-padding"><div>Text Color</div> <div><Input style={{ height: "20px", width: "80px" }} onChange={this.onTextColor} placeholder="#000" /></div></div>
          <div className="Theme-padding "><div>Quick Links</div> <div className="Theme-button-quick">Quick Link +</div></div>
          <hr style={{ width: "320px" }} />
          <div className="Theme-padding" >
            <SquareCard title="Visitor" />
            <SquareCard title="Event" />

          </div>

        </div>



        <div className="Ipad-Container"  ><div className="Ipad-Display" style={{ backgroundImage:"url(" + this.state.ipadbackground + ")" }}></div><div className="Ipad-Display-Items"><div class="pa4" >
          <img style={{ backgroundColor: this.state.BackgroundCol }}
            src={logo}
            class="Ipad-Logo" alt="logo" />
        </div>
          <h2 style={{ color: this.state.TextCol }}>{this.state.MainText}</h2>
          <h5 style={{ color: this.state.TextCol }}>{this.state.SubText}</h5>
          <div style={{ display: "flex", marginTop: "-10px" }}><div class="pa4">
            <img
              src={theme1}
              class="Ipad-Logo  " alt="avatar" />
          </div><div class="pa4">
              <img
                src={theme1}
                class="Ipad-Logo  " alt="avatar" />
            </div></div>
        </div></div>
      </div>
    );
  }
}
