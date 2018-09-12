import React, { Component, Fragment } from "react";
import './index.css'
import { Input, Icon,Upload,Button, Modal, Switch } from "antd"
import SquareCard from "../../SquareCard"
import theme1 from "../../../../Res/theme1.jpeg"
import theme2 from "../../../../Res/theme2.jpg"
import theme3 from "../../../../Res/theme3.jpeg"
import logo from "../../../../Res/logo.svg"
import qr from "../../../../Res/qr.png"

const { TextArea } = Input;
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipadbackground: theme1,
      MainText: "Hello",
      SubText: "Select Purpose of your visit",
      TextCol: "#000",
      BackgroundCol: "#A9A9A9",
      modal1Visible: false,
      modal2Visible: false,
      bgimage: null,
      logo: logo,
      displayquick: false,
      Switch: false

    }
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  onMainText = (e) => {
    if(e.target.value.length === 0 ){

      this.setState({ MainText:'Hello' })
    }
    else if(e.target.value.length <= 12 ){
      this.setState({MainText:e.target.value})
    }
    
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
    this.setState({ ipadbackground: theme1 })
  }
  onLogo2 = () => {
    this.setState({ ipadbackground: theme2 })
  }
  onLogo3 = () => {
    this.setState({ ipadbackground: theme3 })
  }

  onfile1 = (e) => {

    console.log(e)
   const reader = new FileReader();
   reader.addEventListener('load', () => this.setState({logo:reader.result}));
   reader.readAsDataURL(e.file.originFileObj)
  }
  onfile2 = (e) => {
   console.log(e)
   const reader = new FileReader();
   reader.addEventListener('load', () => this.setState({ipadbackground:reader.result}));
   reader.readAsDataURL(e.file.originFileObj)
  }
  onQuickLinkButton = () => {
    this.setState({ displayquick: !this.state.displayquick })
  }
  onSwitch = () => {
    this.setState({ Switch: !this.state.Switch })
  }


  render() {

    return (
      <div className="Theme-Container"  >

        <div style={{ height: "400px" }}  >
          <div className="Theme-padding"><div>Upload Logo</div><div> <Icon style={{ fontSize: "20px" }} type="cloud-upload" onClick={() => this.setModal1Visible(true)} />
            <Modal
              title="Upload Logo"
              visible={this.state.modal1Visible}
              onOk={() => this.setModal1Visible(false)}
              onCancel={() => this.setModal1Visible(false)}
            >
              <Upload  onChange={this.onfile1}
>
                <Button>
                  <Icon type="upload" /> Click to Upload
                 </Button>
              </Upload> 
            </Modal>
          </div>
          </div>
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
                class="br-100" alt="avatar"   />
            </div>
            <div> <Icon style={{ fontSize: "30px", marginTop: "15px" }} onClick={() => this.setModal2Visible(true)} type="cloud-upload" />  <Modal
              title="Upload Background"
              visible={this.state.modal2Visible}
              onOk={() => { this.setModal2Visible(false) }}
              onCancel={() => this.setModal2Visible(false)}
            >

              <Upload  onChange={this.onfile2}
>
                <Button>
                  <Icon type="upload" /> Click to Upload
                 </Button>
              </Upload> 
            
            
            
            
            
        </Modal></div>
          </div>
          <Input className="Theme-padding" placeholder="Main Text" onChange={this.onMainText}  />
          <TextArea className="Theme-padding" placeholder="Sub Text" onChange={this.onSubText} autosize={{ minRows: 2, maxRows: 6 }} />
          <div className="Theme-padding"><div>Text Color</div> <div><Input style={{ height: "20px", width: "80px" }} onChange={this.onTextColor} placeholder="#000" /></div></div>
          <div className="Theme-padding "><div>Quick Links</div> <div className="Theme-button-quick" onClick={this.onQuickLinkButton}>Quick Link +</div></div>
          <hr style={{ width: "320px" }} />
          <div className="Theme-padding" >
            <SquareCard img={true} title="Visitor" />
            <SquareCard img={true} title="Event" />

          </div>
          {this.state.displayquick ? <div>
            <Input className="Theme-padding " placeholder="Walk in Interview" />
            <div className="Theme-padding QuickLinkPop "><Input style={{ width: "200px" }} placeholder="Interview" /><div className="theme-button">Add</div></div>
            <hr style={{ width: "320px" }} />
            <div className="Theme-padding QuickLinkPop "><h3>Enable QR</h3><Switch checkedChildren={<Icon type="check" />} onChange={this.onSwitch} unCheckedChildren={<Icon type="cross" />} /></div>
          </div> : null}
        </div>



        <div className="Ipad-Container"  >
        <div className="Ipad-Display" style={{ backgroundImage: "url(" + this.state.ipadbackground + ")",backgroundSize:'100% 100%'}}></div><div className="Ipad-Display-Items"><div class="pa4" >
          <img style={{ backgroundColor: this.state.BackgroundCol }}
            src={this.state.logo}
            class="Ipad-Logo" alt="logo" />
        </div>
          <h2 style={{ color: this.state.TextCol }} >{this.state.MainText}</h2>
          <h5 style={{ color: this.state.TextCol }}>{this.state.SubText}</h5>
          <div style={{ display: "flex", marginTop: "-10px" }}>
            <div class="pa4">
              <div
                style={{ backgroundColor: "#e6e6e6", opacity: "0.8", display: "flex", justifyContent: "center", alignItems: "center" }}
                class="Ipad-Logo"><h6>Visitor</h6></div>
            </div>
            <div class="pa4">
              <div
                style={{ backgroundColor: "#e6e6e6", opacity: "0.8", display: "flex", justifyContent: "center", alignItems: "center" }}
                class="Ipad-Logo"><h6>Event</h6></div>
            </div>

          </div>
          {this.state.Switch ? <div style={{ marginTop: "-15px" }} className="QuickLinkPop" ><h5 style={{ color: this.state.TextCol }}>Got a QR? Scan Now</h5><img style={{ width: "20px", height: "20px" }} src={qr} /></div> : null}
        </div>
        </div>

      </div>
    );
  }
}
