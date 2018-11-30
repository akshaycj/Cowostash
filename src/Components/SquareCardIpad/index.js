import React, { Component } from "react";
import "./index.css";
import { Icon, Modal, Input } from "antd";

const { TextArea } = Input;

const Purpose = () => {
  return (
    <Input
      className="Staffs-Input"
      onChange={this.onName}
      placeholder="Purpose Name"
    />
  );
};
export default class extends Component {
  componentDidMount() {
    this.setState({ title: this.props.title, enable: this.props.enable });
  }

  constructor(props) {
    super(props);
    this.state = {
      enable: true,
      image: true,
      staff: false,
      visible: false,
      title: "" || this.props.title,
      Nda: "" || this.props.content,
      email: "",
      id: "" || this.props.id
    };
  }

  onEn = () => {
    this.setState({ enable: !this.state.enable });
    this.props.edit1 && this.props.edit2
      ? this.props.onUpdate(
          this.state.title,
          this.state.Nda,
          !this.state.enable,
          this.state.id
        )
      : this.props.onValue(!this.state.enable);
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  getdataintablet = data => {
    console.log("get", data);
  };

  render() {
    return (
      <div className="square-card-container-Ipad">
        <div className="square-card-Ipad">
          {this.props.img ? null : (
            <img
              src={this.props.src}
              style={{ alignSelf: "center" }}
              width={50}
              height={50}
            />
          )}

          <div style={{ marginTop: 5, fontSize: "15px" }}>
            {this.state.title}
          </div>
          {this.state.enable ? (
            <Icon
              type="check-circle"
              style={{ alignSelf: "flex-end", marginRight: "auto" }}
            />
          ) : (
            <Icon
              type="close-circle"
              style={{ alignSelf: "flex-end", marginRight: "auto" }}
            />
          )}
        </div>
        <div className="square-card-menu-Ipad">
          <div className="square-card-menu-inner-Ipad">
            <div className="square-card-menu-inner-circle-Ipad">
              {this.state.enable ? (
                <Icon
                  onClick={this.onEn}
                  type="check-circle-o"
                  style={{ alignSelf: "center", margin: "auto" }}
                />
              ) : (
                <Icon
                  type="close-circle"
                  onClick={this.onEn}
                  style={{ alignSelf: "center", margin: "auto" }}
                />
              )}
            </div>
            <div className="square-card-menu-inner-circle-Ipad">
              <Icon
                type="form"
                style={{ alignSelf: "center", margin: "auto" }}
                onClick={this.showModal}
              />
              <Modal
                title="Edit"
                visible={this.state.visible}
                footer={null}
                onCancel={this.handleCancel}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
