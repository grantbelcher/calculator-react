import React, { useState } from "react";
import Equation from "./Equation";
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
  handleReturn,
}) {
  let equationComponents = prevEquations.map((equation, i) => {
    const { expression, output, forwardRef, carrotIndex } = equation;

    if (i === focus) {
      return (
        <Equation
          // key={i}
          index={i}
          clickHandler={() => handleFocus(i)}
          handleKeyPress={handleKeyPress}
          handleReturn={handleReturn}
          expression={expression}
          output={output}
          forwardRef={forwardRef}
          focus={true}
          focusIndex={focus}
          finalIndex={prevEquations.length - 1}
          handleFocus={handleFocus}
          inputRef={inputRef}
        />
      );
    }

    return (
      <Equation
        focus={false}
        focusIndex={focus}
        finalIndex={prevEquations.length - 1}
        handleFocus={handleFocus}
        forwardRef={forwardRef}
        index={i}
        clickHandler={() => handleFocus(i)}
        handleKeyPress={handleKeyPress}
        handleReturn={handleReturn}
        expression={expression}
        output={output}
        forwadRef={false}
        inputRef={null}
      />
    );
  });

  equationComponents = [...equationComponents];

  return <div className="equation-container">{equationComponents}</div>;
}

export default Equations;
