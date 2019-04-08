import React from "react";
import Column from "./Column";

function Table() {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Table;
