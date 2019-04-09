import React, { Component } from "react";

class ReactRefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    //using call back ref
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }

    // this.inputRef.current.focus();
    //console.log(this.inputRef);
  }
  handleClick = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    console.log("ReactRefsDemo render");
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default ReactRefsDemo;
