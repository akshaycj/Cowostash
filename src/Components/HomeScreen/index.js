import React, { Component } from "react";
import './index.css'
import logo from '../../Res/logo.svg'
import qr from '../../Res/qr.png'

export default class extends Component {

  render() {

    return (
      <div >
        <div className="homeS-main">
          <img src={logo} width="100" height="100"  />
         <div className="homeS-middle" >
         <b style={{fontSize:62}} >
            Hello
          </b>
          <div style={{fontSize:36,marginTop:15}} >
            Select purpose editable Text
          </div>
          <div className="homeS-inner" >
            Checkin
          </div>
          <div style={{fontSize:26, marginTop:15, cursor:'pointer'}} >
            Got a QR? Scan Now <img src={qr} width="35" height="35" />
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
