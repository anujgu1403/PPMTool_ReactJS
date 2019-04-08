import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
import MemoComponent from "./MemoComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anuj"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Anuj Gupta"
      });
    }, 2000);
  }
  render() {
    console.log("************Parent Component render***********");
    return (
      <div>
        <MemoComponent name={this.state.name} />
        {/*  <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />*/}
      </div>
    );
  }
}

export default ParentComp;
