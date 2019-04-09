import React, { Component } from "react";
import withCounter from "./withCounter";

class MouseHoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <label onMouseOver={incrementCount}>Mouse hover {count} times</label>
    );
  }
}
export default withCounter(MouseHoverCounter, 7);
