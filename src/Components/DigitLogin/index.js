import React, { Component } from "react";
import './index.css'
import logo from '../../Res/logo.svg'
import { Input } from 'antd'

export default class extends Component {

  render() {

    return (
      <div className="" >
        <div className="digit-main" >
          <div className="digit-top" >
            <img src={logo} width="75px" height="75px" />
            <div className="digit-top-text"><b>Cowostash</b></div>
          </div>

          <div className="digit-mid" >
            Enter your 8 digit connection key and connect your device
          </div>

          <div>
            <div className="digit-bottom-layout" >
              <Input placeholder="8 digit connection key" style={{ borderRadius: 300, marginLeft: 4, height: 40 }} />
              <div className="digit-bottom-button">Connect</div>
            </div>
          </div>
          
        </div>
        <div className="digit-bottom-text" >
            help@cowostash.com
          </div>
      </div>
    );
  }
}
