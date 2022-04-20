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
      <div className="output-container">
        <span className="output">output</span>
      </div>
    </div>
  );
}

export default Equation;
