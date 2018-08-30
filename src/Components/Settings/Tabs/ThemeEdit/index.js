import React, { Component,Fragment } from "react";
import './index.css'
import { Input, Icon } from "antd"
import SquareCard from "../../SquareCard"

const { TextArea } = Input;
export default class extends Component {

  render() {

    return (
      <div className="Theme-Container" >

        <div>
          <div className="Theme-padding"><div>Upload Logo</div> <Icon style={{ fontSize: "20px" }} type="cloud-upload" /></div>
          <div className="Theme-padding"><div>Logo Background Color</div><Input style={{height:"20px",width:"80px"}} placeholder="#000"/></div>
          <div className="Theme-padding">Upload Background/Select from Templates</div>
          <div style={{ display: "flex" }}>
            <div class="pa4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yveMXr63G_6KZVKfusBOmFDmY-qZNjWcBU07WKn___3Oy6Ch"
                class="br-100" alt="avatar" />
            </div><div class="pa4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCZOBZzIynldLrIAp2uGAKRy04WmXlkN6eh_iIL5JQcIERugkqQ"
                class="br-100" alt="avatar"  />
            </div><div class="pa4">
              <img
                src="http://bldgwlf.com/wp-content/uploads/2012/01/danm4.jpg"
                class="br-100" alt="avatar" />
            </div>
            <Icon style={{ fontSize: "30px", marginTop: "15px" }} type="cloud-upload" />
          </div>
          <Input className="Theme-padding" placeholder="Main Text" />
          <TextArea className="Theme-padding" placeholder="Sub Text" autosize={{ minRows: 2, maxRows: 6 }} />
          <div className="Theme-padding"><div>Text Color</div> <div><Input style={{height:"20px",width:"80px"}}  placeholder="#000"/></div></div>
          <div className="Theme-padding "><div>Quick Links</div> <div className="Theme-button-quick">Quick Link +</div></div>
          <hr style={{ width: "320px" }} />
          <div className="Theme-padding" >
            <SquareCard title="Visitor" />
            <SquareCard style={{ alignItems: "center", justifyContent: "center" }} title="Event" />
          </div>
        </div>

        
        
        <div className="Ipad-Container" ><div className="Ipad-Display"></div><div class="pa4">
              <img
                src="http://bldgwlf.com/wp-content/uploads/2012/01/danm4.jpg"
                class="Ipad-Logo " alt="avatar" />
            </div></div>
        
      


      </div>
    );
  }
}
