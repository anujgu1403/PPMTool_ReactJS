import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anuj"
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecyleB componentDidMount");
  }

  componentDidMount() {
    console.log("LifecyleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Anuj Gupta"
    });
  };
  render() {
    console.log("LifecycleB render");
    return (
      <div>
        Lifecycle B --> {this.state.name} <br />
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
export default LifecycleB;
