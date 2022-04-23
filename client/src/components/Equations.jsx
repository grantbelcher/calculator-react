import React, { useState } from "react";
import MemoizedEquation from "./Equation";
import { useTransition } from "react";

// let equation = [
//   "4+5=9",
//   "5*6=30",
//   "9/3=3",
//   "21/3=7",
//   "32/4=8",
//   "32/4=8",
//   "32/4=8",
//   "32/4=8",
//   "32/4=8",
//   "1000/10/25/4=1",
// ];

function Equations({
  currentEquation,
  prevEquations,
  handleKeyPress,
  handleFocus,
  focus,
  inputRef,
}) {
  let equationComponents = prevEquations.map((equation, i) => {
    const { expression, output, forwardRef } = equation;
    if (i === focus) {
      return (
        <MemoizedEquation
          key={i}
          index={i}
          clickHandler={() => handleFocus(i)}
          handleKeyPress={handleKeyPress}
          expression={expression}
          output={output}
          forwardRef={forwardRef}
          focus={true}
        />
      );
    }
    return (
      <MemoizedEquation
        focus={false}
        index={i}
        clickHandler={() => handleFocus(i)}
        handleKeyPress={handleKeyPress}
        expression={expression}
        output={output}
        forwadRef={false}
      />
    );
  });

  const newEquation = (
    <div className="equation-container">
      <MemoizedEquation
        focus={true}
        clickHandler={handleFocus}
        equation={currentEquation}
        handleKeyPress={handleKeyPress}
      />
      {equationComponents}
    </div>
  );

  equationComponents = [...equationComponents];

  return <div className="equation-container">{equationComponents}</div>;
}

export default Equations;
