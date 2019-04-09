import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
//import Message from "./component/Message";
import Counter from "./component/Counter";
import FunctionClicked from "./component/FunctionClicked";
import ClassHandler from "./component/ClassHandler";
import BindEvent from "./component/BindEvent";
import ParentComponent from "./component/ParentComponent";
import LifecycleA from "./component/LifecycleA";
import FragmentDemo from "./component/FragmentDemo";
import Table from "./component/Table";
import ParentComp from "./component/ParentComp";
import ReactRefsDemo from "./component/ReactRefsDemo";
import FocusInput from "./component/FocusInput";
import FRParentInput from "./component/FRParentInput";
import Hero from "./component/Hero";
import ErrorBoundary from "./component/ErrorBoundary";
import ClickCounter from "./component/ClickCounter";
import MouseHoverCounter from "./component/MouseHoverCounter";
import ClickCounterTwo from "./component/ClcikCounterTwo";
import MouseHoverCounterTwo from "./component/MouseHoverCounterTwo";
import User from "./component/User";
import CounterTwo from "./component/CounterTwo";
import ComponentA from "./component/ComponentA";
import { ProviderContext } from "./component/userContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ProviderContext value="Anuj Gupta">
            <ComponentA />
          </ProviderContext>
          {/* <CounterTwo
            render={(count, incrementCount) => (
              <ClickCounterTwo count={count} incrementCount={incrementCount} />
            )}
          />
          <CounterTwo
            render={(count, incrementCount) => (
              <MouseHoverCounterTwo
                count={count}
                incrementCount={incrementCount}
              />
            )}
          />
          <User render={isLoggedIn => (isLoggedIn ? "Anuj" : "Guest")} />
         <ClickCounter name="Anuj" />
          <MouseHoverCounter />
           <ErrorBoundary>
            <Hero heroName="Anuj" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Gupta" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Jocker" />
          </ErrorBoundary>
           <FRParentInput />
          <FocusInput />
          <ReactRefsDemo />
          <ParentComp />
          <Table />
            <FragmentDemo />
           <LifecycleA />
          <ParentComponent />
           <BindEvent />
          <Welcome name="Anuj" lastName="Mittal" />
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
    <Greet name="Raksham" lastName="Mittal" />
          <Message />
          <Welcome name="Anuj" lastName="Mittal" />
          <Greet name="Anuj" lastName="Mittal">
            <p>This is react learning app</p>
          </Greet>
          <Counter />
          <FunctionClicked />
          <ClassHandler />*/}
        </header>
      </div>
    );
  }
}

export default App;
