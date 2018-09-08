import React, { Component } from "react";
import "./index.css";
import { Icon } from "antd";

export default class extends Component {

  constructor(props){
    super(props)
    this.state={
      enable:true
    }
  }

  onValue=()=>{
    return (this.state.enable)
  }

  onEn=()=>{
    this.setState({enable:!this.state.enable})
  }


  render() {
    return (
      <div className="square-card-container">
        <div className="square-card">
          <img
            src={this.props.src}
            style={{ alignSelf: "center" }}
            width={50}
            height={50}
          />
          <div style={{ marginTop: 5 }}>{this.props.title}</div>
          {this.state.enable?<Icon
            type="check-circle"
            style={{ alignSelf: "flex-end", marginRight: "auto" }}
          />:<Icon
          type="close-circle"
          style={{ alignSelf: "flex-end", marginRight: "auto" }}
        />}
        </div>
        <div className="square-card-menu">
          <div className="square-card-menu-inner">
            <div className="square-card-menu-inner-circle">
              {this.state.enable?<Icon
onClick={this.onEn}
                type="check-circle-o"
                style={{ alignSelf: "center", margin: "auto" }}
              />:
              <Icon type="close-circle" onClick={this.onEn} style={{ alignSelf: "center", margin: "auto" }}  />}
            </div>
            <div className="square-card-menu-inner-circle">
              <Icon
                type="form"
                style={{ alignSelf: "center", margin: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
