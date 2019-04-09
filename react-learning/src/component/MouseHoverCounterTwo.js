import React, { Component } from "react";
import withCounter from "./withCounter";

class MouseHoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <label onMouseOver={incrementCount}>Clicked {count} times</label>;
  }
}
export default MouseHoverCounterTwo;
