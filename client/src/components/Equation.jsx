import React, { useState } from "react";

function Equation({ focus, index, clickHandler }) {
  console.log(clickHandler, "yoooo");
  return (
    <div
      className="equation"
      onClick={() => clickHandler(index)}
      style={{ outline: focus ? "solid" : "none" }}
    >
      <input autoFocus={focus} type="text" className="expression" />
      <div className="output-container">
        <span className="output">output</span>
      </div>
    </div>
  );
}

export default Equation;
