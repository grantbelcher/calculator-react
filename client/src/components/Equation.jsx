import React, { useState } from "react";

function Equation({ focus, index, clickHandler, currentEquation }) {
  const { expression, output } = currentEquation;

  return (
    <div
      className="equation"
      onClick={() => clickHandler(index)}
      style={{ outline: focus ? "solid" : "none" }}
    >
      <input
        autoFocus={focus}
        type="text"
        className="expression"
        value={expression}
      />
      <div className="output-container">
        <span className="output">{output}</span>
      </div>
    </div>
  );
}

export default Equation;
