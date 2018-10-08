import React, { Component, Fragment } from "react";
import "./index.css";
import { Input, Icon, Upload, Button, Modal, Switch, message } from "antd";
import SquareCard from "../../../SquareCardIpad";
import theme1 from "../../../../Res/theme1.jpeg";
import theme2 from "../../../../Res/theme2.jpg";
import theme3 from "../../../../Res/theme3.jpeg";
import logo from "../../../../Res/logo.svg";
import qr from "../../../../Res/qr.png";
import { BASE_URL, AUTH } from "../../../../Utils/Api";
import Util from "./../../../../Utils/index";
import { Cascader } from "antd";

const options = [
  {
    value: "Visitor",
    label: "Visitor"
  },
  {
    value: "Event",
    label: "Event"
  },
  {
    value: "Vendor",
    label: "Vendor"
  },
  {
    value: "Maintenence",
    label: "Maintenence"
  },
  {
    value: "Employee",
    label: "Employee"
  },
  {
    value: "Delivery",
    label: "Deilvery"
  }
];

const Utils = new Util();
const { TextArea } = Input;
const url =
  BASE_URL + "dashboard/companies/" + Utils.getCompanyId() + "/configurations";

export default class extends Component {
  constructor(props) {
    super(props);
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
      Switch: false,
      title1: "Visitor",
      title2: "Event",
      quicklinkenable: null,
      quickLinks: [],
      config_id: "",
      eight: "80px"
    };
  }

  componentDidMount() {
    var that = this;

    var d = {
      id: 0,
      img: true,
      title: "Visitor",
      enable: true,
      edit: true,
      edit2: true
    };
    var e = {
      id: 1,
      img: true,
      title: "Event",
      enable: true,
      edit: true,
      edit2: true
    };
    var data = [];
    data.push(d);
    data.push(e);
    this.setState({ quickLinks: data });

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("data---", data);

        that.setState({ config_id: data.configuration.id });
      })
      .catch(error => {
        if (error) {
          Utils.displayNotification(
            error.response.data.error,
            "Error",
            "error"
          );
        } else {
          message.error("Error");
        }
      });
  }

  onSave = () => {
    var data = {
      configuration: {
        text_color: this.state.TextCol,
        main_text: this.state.MainText,
        sub_text: this.state.SubText,
        quick_links: this.state.quickLinks
      }
    };
    fetch(url + "/" + this.state.config_id, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        message.success(data.message);
      })
      .catch(error => {
        Utils.displayNotification(error.response.data.error, "Error", "error");
      });
  };

  onEnableCheck = value => {
    console.log("val", value);
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  onMainText = e => {
    if (e.target.value.length === 0) {
      this.setState({ MainText: "Hello" });
    } else if (e.target.value.length <= 12) {
      this.setState({ MainText: e.target.value });
    }
  };

  onSubText = e => {
    if (e.target.value.length === 0) {
      this.setState({ SubText: "Select Purpose of your visit" });
    } else if (e.target.value.length <= 26) {
      this.setState({ SubText: e.target.value });
    }
  };
  onBackgroundColor = e => {
    this.setState({ BackgroundCol: e.target.value });
  };
  onTextColor = e => {
    this.setState({ TextCol: e.target.value });
  };
  onLogo1 = () => {
    this.setState({ ipadbackground: theme1 });
  };
  onLogo2 = () => {
    this.setState({ ipadbackground: theme2 });
  };
  onLogo3 = () => {
    this.setState({ ipadbackground: theme3 });
  };

  onfile1 = e => {
    console.log(e);
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      this.setState({ logo: reader.result })
    );
    reader.readAsDataURL(e.file.originFileObj);
  };
  onfile2 = e => {
    console.log(e);
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      this.setState({ ipadbackground: reader.result })
    );
    reader.readAsDataURL(e.file.originFileObj);
  };
  onQuickLinkButton = () => {
    this.setState({ displayquick: !this.state.displayquick });
  };
  onSwitch = () => {
    this.setState({ Switch: !this.state.Switch });
  };
  getdata = data1 => {};
  CascaderonChange = () => {};
  render() {
    return (
      <div>
        <div
          onClick={this.onSave}
          className="theme-button"
          style={{ width: 100, marginLeft: "auto" }}
        >
          Save
        </div>
        <div className="Theme-Container">
          <div style={{ height: "400px" }}>
            <div className="Theme-padding">
              <div>Upload Logo</div>
              <div>
                {" "}
                <Icon
                  style={{ fontSize: "30px" }}
                  type="cloud-upload"
                  onClick={() => this.setModal1Visible(true)}
                />
                <Modal
                  title="Upload Logo"
                  visible={this.state.modal1Visible}
                  onOk={() => this.setModal1Visible(false)}
                  onCancel={() => this.setModal1Visible(false)}
                >
                  <Upload onChange={this.onfile1}>
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                </Modal>
              </div>
            </div>
            <div className="Theme-padding">
              <div>Logo Background Color</div>
              <Input
                style={{ height: "20px", width: "80px" }}
                placeholder="#000"
                onChange={this.onBackgroundColor}
              />
            </div>
            <div className="Theme-padding">
              Upload Background/Select from Templates
            </div>
            <div style={{ display: "flex" }}>
              <div class="pa4" onClick={this.onLogo1}>
                <img
                  src={theme1}
                  class="br-100"
                  style={{ width: "40px", height: "40px" }}
                  alt="avatar"
                />
              </div>
              <div class="pa4" onClick={this.onLogo2}>
                <img
                  src={theme2}
                  class="br-100"
                  style={{ width: "40px", height: "40px" }}
                  alt="avatar"
                />
              </div>
              <div class="pa4" onClick={this.onLogo3}>
                <img
                  src={theme3}
                  class="br-100"
                  style={{ width: "40px", height: "40px" }}
                  alt="avatar"
                />
              </div>
              <div>
                {" "}
                <Icon
                  style={{
                    fontSize: "40px",
                    marginTop: "15px",
                    marginLeft: "30px"
                  }}
                  onClick={() => this.setModal2Visible(true)}
                  type="cloud-upload"
                />{" "}
                <Modal
                  title="Upload Background"
                  visible={this.state.modal2Visible}
                  onOk={() => {
                    this.setModal2Visible(false);
                  }}
                  onCancel={() => this.setModal2Visible(false)}
                >
                  <Upload onChange={this.onfile2}>
                    <Button>
                      <Icon type="upload" /> Click to Upload
                    </Button>
                  </Upload>
                </Modal>
              </div>
            </div>
            <Input
              className="Theme-padding"
              placeholder="Main Text"
              onChange={this.onMainText}
            />
            <TextArea
              className="Theme-padding"
              placeholder="Sub Text"
              onChange={this.onSubText}
              autosize={{ minRows: 2, maxRows: 6 }}
            />
            <div className="Theme-padding">
              <div>Text Color</div>{" "}
              <div>
                <Input
                  style={{ height: "20px", width: "80px" }}
                  onChange={this.onTextColor}
                  placeholder="#000"
                />
              </div>
            </div>
            <div className="Theme-padding ">
              <div>Quick Links</div>{" "}
              <div
                className="Theme-button-quick"
                onClick={this.onQuickLinkButton}
              >
                Quick Link +
              </div>
            </div>
            <hr style={{ width: "360px" }} />
            <div className="Theme-padding">
              {this.state.quickLinks.map(item => (
                <SquareCard
                  eight={this.state.eight}
                  img={item.img}
                  onValue={this.onEnableCheck}
                  edit={item.edit}
                  edit2={item.edit2}
                  title={item.title}
                />
              ))}
            </div>
            {this.state.displayquick ? (
              <div>
                <Input
                  className="Theme-padding "
                  placeholder="Quick Edit Title"
                />
                <div className="Theme-padding QuickLinkPop ">
                  <Cascader
                    style={{ width: "200px" }}
                    options={options}
                    onChange={this.CascaderonChange}
                    placeholder="Select Form"
                  />
                  <div className="theme-button">Add</div>
                </div>
              </div>
            ) : null}
            <hr style={{ width: "360px" }} />
            <div className="Theme-padding QuickLinkPop ">
              <h3>Enable QR</h3>
              <Switch
                checkedChildren={<Icon type="check" />}
                onChange={this.onSwitch}
                unCheckedChildren={<Icon type="cross" />}
              />
            </div>
          </div>

          <div className="Ipad-Container">
            <div
              className="Ipad-Display"
              style={{
                backgroundImage: "url(" + this.state.ipadbackground + ")",
                backgroundSize: "100% 100%"
              }}
            />
            <div className="Ipad-Display-Items">
              <div class="pa4">
                <img
                  style={{ backgroundColor: this.state.BackgroundCol }}
                  src={this.state.logo}
                  class="Ipad-Logo"
                  style={{ width: "30px", height: "30px" }}
                  alt="logo"
                />
              </div>
              <h2 style={{ color: this.state.TextCol }}>
                {this.state.MainText}
              </h2>
              <h5 style={{ color: this.state.TextCol }}>
                {this.state.SubText}
              </h5>
              <div style={{ display: "flex", marginTop: "-10px" }}>
                {this.state.quickLinks.map(item => (
                  <div class="pa4">
                    <div
                      style={{
                        backgroundColor: "#e6e6e6",
                        opacity: "0.8",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      class="Ipad-Logo"
                    >
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
              {this.state.Switch ? (
                <div style={{ marginTop: "-15px" }} className="QuickLinkPop">
                  <h5 style={{ color: this.state.TextCol }}>
                    Got a QR? Scan Now
                  </h5>
                  <img style={{ width: "20px", height: "20px" }} src={qr} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
