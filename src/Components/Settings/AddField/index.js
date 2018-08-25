import React, { Component } from "react";
import "./index.css";
import { Input, Checkbox, Select, Upload, Button, Icon } from "antd";

const Option = Select.Option;
const options = [
  {
    data: "Textbox",
    val: "tb"
  },
  {
    data: "Email",
    val: "em"
  },
  {
    data: "Phone Number",
    val: "ph"
  },
  {
    data: "Website",
    val: "wb"
  },
  {
    data: "Photo Upload",
    val: "pu"
  },
  {
    data: "Document Upload",
    val: "du"
  },
  {
    data: "QR Scanner",
    val: "qr"
  }
];

const initialState = {
  formData: {
    formTitle: "",
    inputTypes: [],
    uploadTypes: []
  },
  current: "",
  val: "",
  show: false,
  label: "",
  req: false,
  labelAP: false
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onSelect = (val, opt) => {
    console.log("val", val);

    const current = options.find(d => d.val == val).data;

    this.setState({ current, show: true, val });
  };

  onNext = () => {
    var val = this.state.val;

    const formData = this.state.formData;

    switch (val) {
      case "tb":
      case "em":
      case "ph":
      case "wb":
        formData.inputTypes.push({
          type: val,
          label: this.state.label,
          labelAP: this.state.labelAP,
          req: this.state.req
        });
        console.log("tb");

        break;

      case "pu":
      case "du":
        console.log("pu/du");

        formData.uploadTypes.push({
          type: val,
          label: this.state.label,
          labelAP: this.state.labelAP,
          req: this.state.req
        });
        break;
    }
    this.setState({ formData });

    //this.setState(initialState);
  };

  onLabel = e => {
    this.setState({ label: e.target.value });
  };

  onFormTitle = e => {
    const formData = this.state.formData;
    formData.formTitle = e.target.value;

    this.setState({ formData });
  };

  onLabelAP = e => {
    this.setState({ labelAP: e.target.checked });
  };

  onReq = e => {
    this.setState({ req: e.target.checked });
  };
  onClear = () => {
    const formData = {
      formTitle: "",
      inputTypes: [],
      uploadTypes: []
    };
    this.setState({ formData });
  };

  render() {
    return (
      <div className="AddField-main">
        <div style={{ width: "50%", margin: 20 }}>
          <div style={{ width: "60%" }}>
            <Input
              required={true}
              placeholder="Form Title"
              type="phone"
              size="large"
              onChange={this.onFormTitle}
            />
            <br />
            <br />
            <div className="form-gen-font">
              <Select
                style={{ width: "100%" }}
                placeholder="Select Field"
                size="large"
                onSelect={this.onSelect}
              >
                {options.map(item => (
                  <Option value={item.val}>{item.data}</Option>
                ))}
              </Select>
              <br />
              <br />
              <text>{this.state.current}</text>
              <br />
              <br />
              {this.state.show ? (
                <div>
                  <text>Label</text>

                  <Input size="large" onChange={this.onLabel} />
                  <br />
                  <br />
                  <Checkbox onChange={this.onReq}>Required</Checkbox>
                  <br />
                  <Checkbox onChange={this.onLabelAP}>
                    Label as placeholder
                  </Checkbox>
                </div>
              ) : null}
            </div>

            <div className="form-gen-font" />
          </div>
        </div>
        <div
          className="theme-button"
          style={{
            height: 40,
            marginTop: "auto",
            marginBottom: 30,
            marginRight: 25
          }}
          onClick={this.onNext}
        >
          Next >
        </div>
        <div className="form-preview">
          <div className="form-preview-inner">
            <h2>Form Preview :</h2>
            <div style={{ padding: 10 }}>
              <h3> {this.state.formData.formTitle} </h3>
              {this.state.formData.inputTypes.map(x => (
                <div style={{ display: "flex" }}>
                  <Input
                    style={{ margin: 5 }}
                    addonBefore={x.label}
                    placeholder={x.labelAP ? x.label : ""}
                    disabled
                  />
                  {x.req ? (
                    <div style={{ color: "red" }}>*</div>
                  ) : (
                    <div style={{ color: "whitesmoke" }}>*</div>
                  )}
                  <br />
                </div>
              ))}

              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {this.state.formData.uploadTypes.map(x => (
                  <div style={{ display: "flex" }}>
                    <Upload name={x.label} disabled>
                      <Button>
                        <Icon type={x.type == "pu" ? "camera" : "file"} />
                        {x.label}
                      </Button>
                    </Upload>{" "}
                    <div>
                      {x.req ? (
                        <div style={{ color: "red" }}>*</div>
                      ) : (
                        <div style={{ color: "whitesmoke" }}>*</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{ height: 45, width: 50, marginTop: 5, alignSelf: "center" }}
            className="theme-button"
            onClick={this.onClear}
          >
            Clear ^
          </div>
        </div>
      </div>
    );
  }
}
