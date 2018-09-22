import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";

const FormItem = Form.Item;

let uuid = 0;
class DynamicFieldSet extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    console.log("-----", this.props.data);
  }

  componentWillReceiveProps(props) {
    console.log("====", props.data);
    const data = props.data;
    this.setState({ data: props.data });
  }

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const data = this.state.data;
    // We need at least one passenger

    // can use data-binding to set
    this.setState({
      data: data.filter(item => item.key !== k)
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("data");
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      data: this.state.data
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { form } = this.props;

    getFieldDecorator("data", { initialValue: [] });
    const keys = this.state.data;
    const formItems = keys.map((k, index) => {
      return (
        <FormItem required={k.required} key={k.key}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Input
              addonBefore={k.label}
              size="small"
              placeholder={k.placeholder ? k.label : ""}
              style={{ margin: 5 }}
            />
            <Icon
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k.key)}
            />
          </div>
        </FormItem>
      );
    });
    return <Form onSubmit={this.handleSubmit}>{formItems}</Form>;
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);

export default WrappedDynamicFieldSet;
