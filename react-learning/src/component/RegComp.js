import React, { Component } from "react";

class RegComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Reg Component render");
    return <div>Reg Component {this.props.name}</div>;
  }
}

export default RegComp;
