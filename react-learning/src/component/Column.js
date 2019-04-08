import React from "react";

function Column() {
  const items = ["React", "MS"];
  return (
    <>
      {items.map(item => (
        <React.Fragment key={item.id}>Title {item} </React.Fragment>
      ))}
    </>
  );
}

export default Column;
