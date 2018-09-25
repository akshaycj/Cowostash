import React, { Component } from "react";
import { Form, Input, Icon, Button, Rate, Select, Checkbox } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const FormItem = Form.Item;
const Option = Select.Option;

let uuid = 0;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  // change background colour if dragging

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({});

class DynamicFieldSet extends React.Component {
  state = {
    data: []
  };

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const data = reorder(
      this.state.data,
      result.source.index,
      result.destination.index
    );

    this.setState({
      data
    });
    console.log("neww--", data);
  };

  componentWillReceiveProps(props) {
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
        <Draggable key={k.key} draggableId={k.key} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <div
                key={k.key}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 5,
                  padding: 2
                }}
              >
                {k.type === "text" ? (
                  <Input
                    addonBefore={k.label}
                    size="default"
                    placeholder={k.placeholder ? k.label : ""}
                  />
                ) : k.type === "email" ? (
                  <Input
                    addonBefore={
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between"
                        }}
                      >
                        <Icon
                          style={{ fontSize: 20, marginRight: 2 }}
                          type="mail"
                        />
                        {k.label}
                      </div>
                    }
                    size="default"
                    placeholder={k.placeholder ? k.label : ""}
                  />
                ) : k.type === "number" ? (
                  <Input
                    addonBefore={
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between"
                        }}
                      >
                        <Icon
                          style={{ fontSize: 20, marginRight: 2 }}
                          type="mobile"
                        />
                        {k.label}
                      </div>
                    }
                    size="default"
                    placeholder={k.placeholder ? k.label : ""}
                  />
                ) : null}
                {k.type === "rating" ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 5,
                      marginLeft: 10,
                      textAlign: "left",
                      width: "100%"
                    }}
                  >
                    {k.label}
                    <Rate style={{ marginTop: 3 }} />
                  </div>
                ) : null}

                {k.type === "select" ? (
                  <Select placeholder={k.label} style={{ width: "100%" }}>
                    {k.options.map(item => (
                      <Option value={item}>{item}</Option>
                    ))}
                  </Select>
                ) : null}
                {k.type === "checkbox" ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 5,
                      marginLeft: 10,
                      textAlign: "left",
                      width: "100%"
                    }}
                  >
                    {k.label}
                    <div>
                      {k.options.map(item => (
                        <Checkbox>{item}</Checkbox>
                      ))}
                    </div>
                  </div>
                ) : null}
                <Icon
                  style={{ marginLeft: 2 }}
                  type="minus-circle-o"
                  disabled={keys.length === 1}
                  onClick={() => this.remove(k.key)}
                />
              </div>
            </div>
          )}
        </Draggable>
      );
    });
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {formItems}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);

export default WrappedDynamicFieldSet;
