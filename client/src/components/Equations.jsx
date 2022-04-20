import React, { useState } from "react";
import Equation from "./Equation";
import { useTransition } from "react";

let equation = [
  "4+5=9",
  "5*6=30",
  "9/3=3",
  "21/3=7",
  "32/4=8",
  "32/4=8",
  "32/4=8",
  "32/4=8",
  "32/4=8",
  "1000/10/25/4=1",
];

function Equations() {
  const [focus, setFocus] = useState(0);

  const clickHandler = (indexOfEquation) => {
    setFocus(indexOfEquation);
  };
  const elements = equation.map((equation, i) => {
    if (i === focus)
      return <Equation focus={true} index={i} clickHandler={clickHandler} />;
    return <Equation focus={false} index={i} clickHandler={clickHandler} />;
  });

  return <div className="equation-container">{elements}</div>;
}

export default Equations;
