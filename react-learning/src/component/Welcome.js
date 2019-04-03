import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        Welcome to React app
        <h3>
          {this.props.name} {this.props.lastName}
        </h3>
      </div>
    );
  }
}

export default Welcome;
