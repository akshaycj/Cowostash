import React, { Component, Fragment } from "react";
import "./index.css";
import {
  Input,
  Icon,
  Upload,
  Button,
  Modal,
  Switch,
  message,
  Transfer,
  Select
} from "antd";
import SquareCard from "../../../SquareCardIpad";
import theme1 from "../../../../Res/theme1.jpeg";
import theme2 from "../../../../Res/theme2.jpg";
import theme3 from "../../../../Res/theme3.jpeg";
import logo from "../../../../Res/logo.svg";
import qr from "../../../../Res/qr.png";
import { BASE_URL, BASE_URL_COMP } from "../../../../Utils/Api";
import Util from "./../../../../Utils/index";
import { Cascader } from "antd";
import { DataContextConsumer } from "../../../../Context/DataContext";

export default props => (
  <DataContextConsumer>
    {({ quicklinks, setQuickLinks }) => (
      <ThemeEdit
        {...props}
        quicklinks={quicklinks}
        setQuickLinks={setQuickLinks}
      />
    )}
  </DataContextConsumer>
);

const Option = Select.Option;

// const options = [
//   {
//     value: "Visitor",
//     label: "Visitor"
//   },
//   {
//     value: "Event",
//     label: "Event"
//   },
//   {
//     value: "Vendor",
//     label: "Vendor"
//   },
//   {
//     value: "Maintenence",
//     label: "Maintenence"
//   },
//   {
//     value: "Employee",
//     label: "Employee"
//   },
//   {
//     value: "Delivery",
//     label: "Deilvery"
//   }
// ];

const Utils = new Util();
const { TextArea } = Input;
const AUTH = "Bearer " + Utils.getToken();
const url =
  BASE_URL + "dashboard/companies/" + Utils.getCompanyId() + "/configurations";
const QL_url =
  BASE_URL + "dashboard/companies/" + Utils.getCompanyId() + "/quick_links";

export class ThemeEdit extends Component {
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
      height: "80px",
      typesOfVisits: [],
      quickLinkTitle: "",
      selectedFormId: "",
      selectedKeys: [],
      targetKeys: []
    };
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.quicklinks !== this.state.quickLinks) {
  //     this.setState({ quicklinks: prevProps.quicklinks });
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.quicklinks !== prevState.quicklinks) {
  //     return { data: nextProps.quicklinks };
  //   } else return null;
  // }
  componentDidMount() {
    var that = this;

    const { quicklinks, setQuickLinks } = this.props;

    // var d = {
    //   key: 0,
    //   img: true,
    //   title: "Visitor",
    //   enable: true,
    //   type: "ql"
    // };
    // var e = {
    //   key: 1,
    //   img: true,
    //   title: "Event",
    //   enable: true,
    //   type: "ql"
    // };
    // var f = {
    //   key: 2,
    //   img: true,
    //   title: "Check in",
    //   enable: false,
    //   type: "ql"
    // };

    // setQuickLinks(d);

    // setQuickLinks(e);

    // setQuickLinks(f);

    // var data = [];
    // data.push(d);
    // data.push(e);
    // data.push(f);
    //this.setState({ quickLinks: quicklinks });

    this.getConfig();

    this.getVisitForms();

    this.getQL();
  }

  getConfig = () => {
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
        if (data) {
          console.log("data---", data);

          const config = data.configuration;

          this.setState({
            config_id: config.id,
            logo: config.logo,
            ipadbackground: config.background_image,
            MainText: config.main_text,
            SubText: config.sub_text,
            TextCol: config.text_color
          });
        }
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
  };

  getQL = () => {
    fetch(QL_url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      }
    })
      .then(res => {
        console.log("response", res);

        return res.json();
      })
      .then(data => {
        if (data) {
          console.log("Data-qL", data);

          const quickLinks = [];
          const targetKeys = [];

          data.quick_links.map(item => {
            item.active ? targetKeys.push(item.id) : null;

            quickLinks.push({
              key: item.id,
              name: item.name,
              active: item.active
            });
          });
          console.log("quick[[", quickLinks);

          this.setState({ quickLinks, targetKeys });
        }
      })
      .catch(error => {
        Utils.displayNotification(error.response, "Error", "error");
      });
  };

  getVisitForms = () => {
    fetch(BASE_URL_COMP + "/type_of_visits", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      }
    })
      .then(res => {
        console.log("response", res);

        return res.json();
      })
      .then(data => {
        if (data) {
          console.log("data", data);

          this.setState({ typesOfVisits: data.type_of_visits });
        }
      })
      .catch(error => {
        Utils.displayNotification(error.response, "Error", "error");
      });
  };

  onSave = () => {
    const {
      TextCol,
      MainText,
      SubText,
      logo,
      quickLinks,
      ipadbackground
    } = this.state;

    var data = {
      configuration: {
        main_text: MainText,
        text_color: TextCol,
        logo: logo,
        sub_text: SubText,
        background_image: ipadbackground,
        quick_links: quickLinks
      }
    };
    console.log("postData", JSON.stringify(data));

    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log("response", res);

        return res.json();
      })
      .then(data => {
        if (data) {
          message.success(data.message);
        }
      })
      .catch(error => {
        Utils.displayNotification(error.response, "Error", "error");
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

  onQuickLinkTitleChange = e => {
    this.setState({ quickLinkTitle: e.target.value });
  };

  onFormSelect = (value, opt) => {
    this.setState({ selectedFormId: value });
  };

  onQuickLinkAdd = () => {
    const { quickLinkTitle, selectedFormId } = this.state;
    var data = {
      quick_link: {
        name: quickLinkTitle,
        type_of_visit_id: selectedFormId,
        active: false
      }
    };

    fetch(QL_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log("response", res);
        this.getQL();
        return res.json();
      })
      .then(data => {
        if (data) {
          console.log("Dones", data);
          message.success(data.message);
        } else {
          message.error("Something went wrong");
        }
      })
      .catch(error => {
        Utils.displayNotification(error.response, "Error", "error");
      });
  };

  handleTransferChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({
      selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys]
    });
    //this.setState({ quickLinks: [...quickLinks, ...selectedKeys] });
    console.log("-----", this.state.selectedKeys);
  };

  transferChange = (nextTargetKeys, direction, moveKeys) => {
    if (direction === "right") {
      if (nextTargetKeys.length <= 2) {
        this.state.targetKeys.length < 2
          ? this.changeQLActive(nextTargetKeys, moveKeys, direction)
          : message.warning("You can only have 2 active quicklinks at a time");
      } else {
        message.warning("You can only have 2 active quicklinks at a time");
      }
    } else {
      this.changeQLActive(nextTargetKeys, moveKeys, direction);
    }

    console.log("targetKeys: ", nextTargetKeys);
    console.log("len ", nextTargetKeys.length);
    console.log("moveKeys: ", moveKeys);
  };

  changeQLActive = (nextTargetKeys, moveKeys, direction) => {
    this.setState({ targetKeys: nextTargetKeys });
    var data = {
      quick_link: {
        active: direction === "right" ? true : false
      }
    };

    moveKeys.map(item => {
      fetch(QL_url + "/" + item, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: AUTH
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          console.log("response", res);

          return res.json();
        })
        .then(data => {
          if (data) {
            this.getQL();
          }
        })
        .catch(error => {
          Utils.displayNotification(error.response, "Error", "error");
        });
    });
  };
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
                  style={{ fontSize: "30px", cursor: "pointer" }}
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
                    marginLeft: "30px",
                    cursor: "pointer"
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
            <hr style={{ width: "100%" }} />
            <div className="Theme-padding">
              <Transfer
                dataSource={this.state.quickLinks}
                selectedKeys={this.state.selectedKeys}
                targetKeys={this.state.targetKeys}
                titles={["Available", "Active"]}
                render={item => item.name}
                onChange={this.transferChange}
                onSelectChange={this.handleTransferChange}
              />

              {/* {this.state.quickLinks.map(item => (
                <SquareCard
                  height={this.state.eight}
                  img={item.img}
                  enable={item.enable}
                  onValue={this.onEnableCheck}
                  type={item.type}
                  title={item.title}
                />
              ))} */}
            </div>
            <div>* You can only enable 2 Quick Links at the same time</div>
            {this.state.displayquick ? (
              <div>
                <Input
                  className="Theme-padding "
                  placeholder="Quick Link Title"
                  onChange={this.onQuickLinkTitleChange}
                />
                <div className="Theme-padding QuickLinkPop ">
                  <Select
                    onChange={this.onFormSelect}
                    placeholder="Select Visitor Form"
                    style={{ width: "100%" }}
                  >
                    {this.state.typesOfVisits.map(item => (
                      <Option value={item.id}>{item.name}</Option>
                    ))}
                  </Select>
                  <div className="theme-button" onClick={this.onQuickLinkAdd}>
                    Add
                  </div>
                </div>
              </div>
            ) : null}
            <hr style={{ width: "100%" }} />
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
                {this.state.quickLinks.map(item => {
                  return item.active ? (
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
                        <h6>{item.name}</h6>
                      </div>
                    </div>
                  ) : null;
                })}
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
