import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anuj"
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecyleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        Lifecycle A
        <LifecycleB />
      </div>
    );
  }
}
export default LifecycleA;
