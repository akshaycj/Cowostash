import React, { Component } from "react";
import './index.css'
import ipad from "../../../../Res/ipad-new.jpg"
import ColorWheel from "color-wheel"
import { Steps } from 'antd';
import { Tabs, Radio } from 'antd';

const TabPane = Tabs.TabPane;
export default class  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:null
    };
  }


  render() {
    
    return (
      <div style={{display:"flex"}}>
      <div className="" style={{display:"flex"}} >
      <div className='ipad'>
      <div src={ipad} style={{width:"264.5px",height:"333px",backgroundColor:"black"}}/>
        <div className='ipad-circle'>
        <img/>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}} >
        <div className="ipad-circles"></div>
        <div className="ipad-circles"></div>
        </div>
      </div>
      <img style={{width:"300px",height:"400px"}} src={ipad}/>
      
      </div>
      <div>
        <div className="theme-button" style={{width:"80px",display:"flex",justifyContent:"flex-end"}}>Save</div>
          <h3>Upload Logo</h3>
      </div>

      </div>
    );
  }
}
