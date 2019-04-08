import React from "react";

function MemoComponent(props) {
  console.log("memo component");
  return <div>Memo Component {props.name}</div>;
}

export default React.memo(MemoComponent);
