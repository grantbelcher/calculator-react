import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/theme";

function Equation({
  focus,
  index,
  clickHandler,
  handleKeyPress,
  expression,
  output,
  forwardRef,
  inputRef,
}) {
  const { theme } = useContext(ThemeContext);
  const themeClass = `eq-${theme}`;
  // conditionally create className string to control when animation runs
  let animationClass = focus === true ? "w3-animate-opacity" : "";
  let outputDisplay;
  if (output === null || output === "") {
    outputDisplay = "";
  } else if (output === "error") {
    outputDisplay = (
      <i
        className={`fas fa-exclamation-triangle w3-animate-opacity ${themeClass}`}
      ></i>
    );
  } else {
    outputDisplay = (
      <nobr>
        <span className={`output ${animationClass} ${themeClass}`}>= </span>
        <span className={`output ${animationClass} ${themeClass}`}>
          {output}
        </span>
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
        className={`expression ${themeClass}`}
        onChange={(e) => handleKeyPress(e.target.value)}
        value={expression}
      />
      <div className="output-container w3-container">{outputDisplay}</div>
    </div>
  );
}

export default Equation;
