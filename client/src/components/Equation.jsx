import React from "react";

// make a component for the single equation
//div
//div.expression
//input.expression
//div.output

// input with zero border styling,

function Equation() {
  return (
    <div className="equation">
      {/* <span> */}
      <input type="text" className="expression" />
      {/* </span> */}
      <span className="output">output</span>
    </div>
  );
}

export default Equation;
