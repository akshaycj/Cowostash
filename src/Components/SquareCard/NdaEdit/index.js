import React, { Component } from "react";
import "./index.css";
import { Switch, Icon, Input, Button } from "antd";
const { TextArea } = Input;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "" || this.props.title,
      Nda: "" || this.props.content
    };
  }
  onTitle = e => {
    this.setState({ Title: e.target.value });
  };
  onNda = f => {
    this.setState({ Nda: f.target.value });
  };
  onUpdate = () => {
    this.props.data(this.state.Title, this.state.Nda);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Input
          value={this.state.Title}
          style={{ marginTop: "1%", width: "320px" }}
          onChange={this.onTitle}
          placeholder="Title"
        />

        <TextArea
          value={this.state.Nda}
          style={{ marginTop: "2%", width: "320px" }}
          onChange={this.onNda}
          placeholder="NDA"
          autosize={{ minRows: "6" }}
        />
        <Button style={{ marginTop: 10 }} onClick={this.onUpdate}>
          update
        </Button>
      </div>
    );
  }
}
