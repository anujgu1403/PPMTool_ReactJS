import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import Greet from "./component/Greet";
//import Welcome from "./component/Welcome";
import Message from "./component/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<Welcome name="Anuj" lastName="Mittal" />
          <Welcome name="Shuchi" lastName="Mittal" />
          <Welcome name="Raksham" lastName="Mittal" />
          <Greet name="Anuj" lastName="Mittal">
            <p>This is react learning app</p>
          </Greet>
          <Greet name="Shuchi" lastName="Mittal">
            <button>
              <h2>Help</h2>
            </button>
          </Greet>
    <Greet name="Raksham" lastName="Mittal" />*/}
          <Message />
        </header>
      </div>
    );
  }
}

export default App;
