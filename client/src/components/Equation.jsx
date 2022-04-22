import React, { useState } from "react";

function Equation({
  focus,
  index,
  clickHandler,
  handleKeyPress,
  expression,
  output,
  forwardRef,
}) {
  // console.log(expression, output, forwardRef, "from equation");
  // console.log(!forwardRef);
  return (
    <div
      className="equation"
      onClick={() => clickHandler(index)}
      style={{ outline: focus ? "solid" : "none" }}
    >
      <input
        autoFocus={focus}
        ref={forwardRef === undefined ? null : forwardRef}
        type="text"
        className="expression"
        onChange={(e) => handleKeyPress(e.target.value)}
        value={expression}
      />
      <div className="output-container">
        <span className="output">{output}</span>
      </div>
    </div>
  );
}

export default Equation;
