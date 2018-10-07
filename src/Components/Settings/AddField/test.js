import React, { Component } from "react";
import { Form, Input, Icon, Button, Rate, Select, Checkbox } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DataContextConsumer } from "../../../Context/DataContext";

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

    this.props.onDataChange(data);
    console.log("neww--", data);
  };

  // componentWillReceiveProps(props) {
  //   const data = props.data;
  //   this.setState({ data: props.data });
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevprop--", prevProps.data);
    console.log("prevState--", prevState);
    if (prevState.data !== this.state.data) {
      this.setState({ data: prevProps.data });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("nextprop", nextProps.data);
    console.log("prevState", prevState);

    if (nextProps.data !== prevState.data) {
      return { data: nextProps.data };
    } else return null;
  }

  remove = k => {
    const data = this.state.data;
    const d = data.filter(item => item.key !== k);
    this.setState({
      data: d
    });

    this.props.getdata(d);
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
const WrappedDynamicFieldSet = DynamicFieldSet;

export default WrappedDynamicFieldSet;

// export default class WrappedDynamicFieldSet extends Component {
//   render() {
//     return (
//       <DataContextConsumer>
//         {({ onDataChange, data }) => {
//           <DynamicFieldSet data={data} />;
//         }}
//       </DataContextConsumer>
//     );
//   }
// }
