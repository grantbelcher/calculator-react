import React, { useState } from "react";
import Test from "./components/Test/Test";
import Trig from "./components/Trig/Trig";
import GridCenter from "./components/GridCenter";
import GridRight from "./components/GridRight";
import Options from "./components/Options";
import Equations from "./components/Equations";

const App = () => {
  const [prevEquations, setPrevEquations] = useState([]);
  const [currentEquation, setCurrentEquation] = useState({
    expression: "",
    output: "",
  });

  const clickHandler = (value) => {
    let currentEquationCopy = {
      ...currentEquation,
    };
    currentEquationCopy = {
      expression: currentEquationCopy.expression + value,
    };
    setCurrentEquation(currentEquationCopy);
  };

  const keyPressHandler = (value) => {
    let currentEquationCopy = {
      ...currentEquation,
    };
    currentEquationCopy = {
      expression: value,
    };
    setCurrentEquation(currentEquationCopy);
  };

  return (
    <div className="container">
      <Equations
        prevEquations={prevEquations}
        currentEquation={currentEquation}
        handleKeyPress={keyPressHandler}
      />
      <div className="calculator-api">
        <Options />
        <div className="bottom-section">
          <Trig />
          <GridCenter clickHandler={clickHandler} />
          <GridRight />
        </div>
      </div>
    </div>
  );
};

export default App;
