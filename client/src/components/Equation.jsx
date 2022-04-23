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
  let outputDisplay;
  if (output === null || output === "") {
    outputDisplay = "";
  } else if (output === "error") {
    outputDisplay = <i class="fas fa-exclamation-triangle"></i>;
  } else {
    outputDisplay = (
      <nobr>
        <span className="output">= </span>
        <span className="output">{output}</span>
      </nobr>
    );
  }
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
        // onKeyPress={(e) => console.log(e.key, "look here")}
        value={expression}
      />
      <div className="output-container">{outputDisplay}</div>
    </div>
  );
}

export default Equation;
