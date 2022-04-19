import React from "react";

let equation = [
  "4+5=9",
  "5*6=30",
  "9/3=3",
  "21/3=7",
  "32/4=8",
  "1000/10/25/4=1",
];

{
}

function Equations() {
  const elements = equation.map((equation, i) => {
    return <div className="equation">{equation}</div>;
  });

  return <div className="equation-container">{elements}</div>;
}

export default Equations;
