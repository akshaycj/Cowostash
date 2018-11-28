import React, { Component } from "react";
import "./index.css";
import { Input, Checkbox, Select, Upload, Button, Icon, Rate } from "antd";
import WrappedDynamicFieldSet from "./test";
import { DataContextConsumer } from "../../../Context/DataContext";

const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

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
  labelAP: false,
  rating: "",
  options: []
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

  onNext = (onDataChange, data) => {
    var val = this.state.val;

    if (val) {
      var d = {
        type: this.state.val,
        label: this.state.label,
        placeholder: this.state.labelAP,
        required: this.state.req,
        key: uuid++,
        
      };
      data.push(d);
      console.log("init", data);
      onDataChange(data);
      //this.setState({ data });
      this.onClear();
    }
  };

  onOptions = e => {
    const options = e.target.value.split(",");
    this.setState({ options });
    //console.log("options", options);
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
    this.setState(initialState);
  };
  ongetdata(data) {
    console.log(data);
    this.setState({ data });
  }
  render() {
    return (
      <DataContextConsumer>
        {({ onDataChange, data }) => (
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
                      <div>
                        {this.state.val === "text" ? (
                          <Checkbox onChange={this.onLabelAP}>
                            Label as placeholder
                          </Checkbox>
                        ) : null}
                        {this.state.val === "email" ? (
                          <Checkbox onChange={this.onLabelAP}>
                            Label as placeholder
                          </Checkbox>
                        ) : null}
                        {this.state.val === "number" ? (
                          <Checkbox onChange={this.onLabelAP}>
                            Label as placeholder
                          </Checkbox>
                        ) : null}
                        {this.state.val === "rating" ? (
                          <CheckboxGroup>
                            <Checkbox>
                              <Rate defaultValue={3} />
                            </Checkbox>
                          </CheckboxGroup>
                        ) : null}
                        {this.state.val === "select" ||
                        this.state.val === "checkbox" ? (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: 10
                            }}
                          >
                            <Input
                              placeholder="Options"
                              onChange={this.onOptions}
                            />
                            <div style={{ fontSize: 10, marginTop: 3 }}>
                              Enter select option seperated by comma(,){" "}
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <br />
                      <br />
                      <div
                        className="theme-button"
                        style={{
                          height: 40,
                          marginTop: 30,
                          width: 80,
                          margin: "auto"
                        }}
                        onClick={this.onNext.bind(this, onDataChange, data)}
                      >
                        Next >
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="form-gen-font" />
              </div>
            </div>

            <div className="form-preview">
              <div className="form-preview-inner">
                <h2>Form Preview :</h2>
                <h3>Click & drag to reorder</h3>
                <div
                  style={{
                    padding: 10,
                    margin: 18,
                    background: "white",
                    minHeight: "80%"
                  }}
                >
                  {this.state.data ? (
                    <WrappedDynamicFieldSet
                      onDataChange={onDataChange}
                      data={data}
                    />
                  ) : (
                    <div>No Content Added!</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </DataContextConsumer>
    );
  }
}
