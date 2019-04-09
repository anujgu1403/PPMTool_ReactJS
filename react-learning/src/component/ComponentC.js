import React, { Component } from "react";
import { ConsumerContext } from "./userContext";

class ComponentC extends Component {
  render() {
    return (
      <ConsumerContext>
        {name => {
          return <div>{name}</div>;
        }}
      </ConsumerContext>
    );
  }
}
export default ComponentC;
