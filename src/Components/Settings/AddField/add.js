import React, { Component } from "react";
import "./index.css";
import { Input, Checkbox, Select, Upload, Button, Icon } from "antd";
import WrappedDynamicFieldSet from "./test";

const Option = Select.Option;

const options = [
  {
    data: "Textbox",
    val: "text"
  },
  {
    data: "Email",
    val: "email"
  },
  {
    data: "Phone Number",
    val: "number"
  },
  {
    data: "Drop Down",
    val: "select"
  },
  {
    data: "Photo Upload",
    val: "file"
  },
  {
    data: "CheckBox",
    val: "checkbox"
  },
  {
    data: "Rating",
    val: "rating"
  }
];

const initialState = {
  formData: {
    formTitle: "",
    inputTypes: [],
    uploadTypes: []
  },
  data: [],
  current: "",
  val: "",
  show: false,
  label: "",
  req: false,
  labelAP: false
};

let uuid = 0;

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
    const data = this.state.data;
    if (val) {
      var d = {
        type: this.state.val,
        label: this.state.label,
        placeholder: this.state.labelAP,
        required: this.state.req,
        key: uuid++
      };
      data.push(d);
      console.log("init", data);

      this.setState({ data });
    }
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
              <WrappedDynamicFieldSet data={this.state.data} />
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
