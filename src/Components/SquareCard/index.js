import React, { Component } from "react";
import "./index.css";
import { Icon, Modal, Input } from "antd";
import NdaEdit from "./NdaEdit";
import StaffEdit from "./StaffEdit";
import QuickEdit from "./QuickEdit";

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
    this.setState({ title: this.props.title });
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
      id: "" || this.props.id,
      height: "130px" || this.props.eight
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

  getdataforNDA = (title, Nda) => {
    this.setState({ title, Nda });
    this.props.onUpdate(title, Nda, this.state.enable, this.state.id);
  };
  getdataforStaff = (data1, data2) => {
    this.setState({ title: data1, email: data2 });
  };
  getdataintablet = data => {
    console.log("get", data);
  };

  render() {
    return (
      <div className="square-card-container">
        <div className="square-card" style={{ height: this.state.height }}>
          {this.props.img ? null : (
            <img
              src={this.props.src}
              style={{ alignSelf: "center" }}
              width={50}
              height={50}
            />
          )}
          {this.props.staff ? (
            <div
              style={{
                width: "50%",
                backgroundColor: "#d8d8d8",
                margin: "auto",
                height: "50%",
                borderRadius: "50%",
                fontSize: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {this.state.title.charAt(0).toUpperCase()}
            </div>
          ) : null}
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
        <div className="square-card-menu">
          <div className="square-card-menu-inner">
            <div className="square-card-menu-inner-circle">
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
            <div className="square-card-menu-inner-circle">
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
              >
                {this.props.type === "nda" ? (
                  <NdaEdit
                    title={this.props.title}
                    content={this.props.content}
                    data={this.getdataforNDA}
                  />
                ) : null}
                {this.props.type === "staff" ? (
                  <StaffEdit data={this.getdataforStaff} />
                ) : null}
                {this.props.type === "ql" ? (
                  <QuickEdit data={this.getdataintablet} />
                ) : null}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
