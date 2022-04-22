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
}) {
  let equationComponents = prevEquations.map((equation, i) => {
    if (i === focus)
      return (
        <Equation
          index={i}
          clickHandler={() => handleFocus(i)}
          handleKeyPress={handleKeyPress}
          equation={equation}
          focus={true}
        />
      );
    return (
      <Equation
        focus={false}
        index={i}
        clickHandler={() => handleFocus(i)}
        handleKeyPress={handleKeyPress}
        equation={equation}
      />
    );
  });

  const newEquation = (
    <div className="equation-container">
      <Equation
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
