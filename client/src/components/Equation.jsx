import React, { useState } from "react";

function Equation({ focus, index, clickHandler, equation, handleKeyPress }) {
  const { expression, output } = equation;

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
