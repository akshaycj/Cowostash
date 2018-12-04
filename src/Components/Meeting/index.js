import React from "react";
import "./index.css";
import { Steps, Button, Select, message, Input, Slider, Tabs } from "antd";

const Step = Steps.Step;
const InputGroup = Input.Group;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

const style = {
  height: 300,
  marginLeft: 50
};

const numbers = [] ;

const numberStyle = {
  height : "40px" ,
  fontSize : "15px",
}

for(let i=12 ; i>0 ; i--){
  numbers.push(
    <div style={numberStyle}>{i}</div>
  )
}

const SliderColumn = (props) => {
      return <div style={style}>
              <div>{props.day}</div>
              <Slider vertical range step={1} max={12} min={1} defaultValue={[1, 6]}/>
            </div>
      }

const steps = [
  {
    title: "Time Slot",
    content: "time slot"
  },
  {
    title: "Availability",
    content: (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}
      >
        <div
          style={{
            height: "360px",
            marginLeft: "50",
            marginBottom: "-30px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={numberStyle}> </div>
          {numbers}
        </div>
          <SliderColumn day="Sun"/>
          <SliderColumn day="Mon"/>
          <SliderColumn day="Tue"/>
          <SliderColumn day="Wed"/>
          <SliderColumn day="Thu"/>
          <SliderColumn day="Fri"/>
          <SliderColumn day="Sat"/>
      </div>
    )
  },
  {
    title: "Form Questions",
    content: (
      <div
        style={{
          width: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "30px"
          }}
        >
          <div style={{ padding: "20px" }}>Name</div>
          <Input style={{ width: "200px" }} placeholder="Enter Your Name" onClick={this.onName}/>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "50px"
          }}
        >
          <div style={{ padding: "20px", paddingRight: "-10px" }}>Email</div>
          <Input
            style={{ width: "100%" }}
            placeholder="Enter Your Email id"
            onClick={this.onEmail}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "30px"
          }}
        >
          <div style={{ padding: "20px" }}>Organization</div>
          <Input style={{ width: "200px" }} placeholder="Enter Organizaton" onClick={this.onOrganization}/>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: "30px"
          }}
        >
          <div style={{ padding: "20px" }}>Phone</div>
          <Input style={{ width: "200px" }} placeholder="Enter Contact Number" onClick={this.onMobile} />
        </div>
      </div>
    )
  }
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      name : "" ,
      email : "" ,
      organization : "" ,
      mobile : "" ,
    };
    this.style = {
      pane: { overflow: "auto", height: "100%" }
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  onName = (name) => {
    this.setState({name})
  }

  onEmail = (email) => {
    this.setState({email})
  }

  onOrganization = (organization) => {
    this.setState({organization})
  }

  onMobile = (mobile) => {
    this.setState({mobile})
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <br />
        <div className="common-body">
          <div className="card-container">
            <Tabs type="card" defaultActiveKey="1">
              <TabPane tab="Meeting Setup" key="1">
                <div style={this.style.pane}>
                  <div style={{ margin: 60 }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Steps current={current}>
                        {steps.map(item => (
                          <Step key={item.title} title={item.title} />
                        ))}
                      </Steps>
                      <div className="steps-content">
                        {steps[current].content}
                      </div>
                      <div className="steps-action">
                        {current > 0 && (
                          <Button
                            style={{ marginRight: 8 }}
                            onClick={() => this.prev()}
                          >
                            Previous
                          </Button>
                        )}
                        {current < steps.length - 1 && (
                          <Button type="primary" onClick={() => this.next()}>
                            Next
                          </Button>
                        )}

                        {current === steps.length - 1 && (
                          <Button
                            type="primary"
                            onClick={() =>
                              message.success("Processing complete!")
                            }
                          >
                            Done
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Integration" key="2" />
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
