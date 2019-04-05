import React from "react";

function FunctionClicked() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default FunctionClicked;
