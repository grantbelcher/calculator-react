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
  // conditionally create className string to control when animation runs
  let animationClass = focus === true ? "w3-animate-opacity" : "";

  let outputDisplay;
  if (output === null || output === "") {
    outputDisplay = "";
  } else if (output === "error") {
    outputDisplay = (
      <i className={`fas fa-exclamation-triangle w3-animate-opacity`}></i>
    );
  } else {
    outputDisplay = (
      <nobr>
        <span className={`output ${animationClass}`}>= </span>
        <span className={`output ${animationClass}`}>{output}</span>
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
        // autoFocus={focus}
        ref={forwardRef === undefined ? null : forwardRef}
        type="text"
        className="expression"
        onChange={(e) => handleKeyPress(e.target.value)}
        // onKeyPress={(e) => console.log(e.key, "look here")}
        value={expression}
      />
      <div className="output-container w3-container">{outputDisplay}</div>
    </div>
  );
}

export default Equation;
