import React, { Component } from "react";

class ClassHandler extends Component {
  clickHandler() {
    console.log("class click handler");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click This</button>
      </div>
    );
  }
}

export default ClassHandler;
