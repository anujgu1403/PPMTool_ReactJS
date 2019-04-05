import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, lastName } = this.props;
    return (
      <div>
        Welcome to React app
        <h3>
          {name} {lastName}
        </h3>
      </div>
    );
  }
}

export default Welcome;
