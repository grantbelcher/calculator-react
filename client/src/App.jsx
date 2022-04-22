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
      ...currentEquationCopy,
      expression: currentEquationCopy.expression + value,
    };
    setCurrentEquation(currentEquationCopy);
  };

  const keyPressHandler = (value) => {
    console.log(currentEquation, "current");
    let currentEquationCopy = {
      ...currentEquation,
    };
    console.log(currentEquationCopy, "current Equation Copy");
    currentEquationCopy = {
      ...currentEquationCopy,
      expression: value,
    };
    setCurrentEquation(currentEquationCopy);
  };

  const returnCurrentEquation = () => {
    setPrevEquations([...prevEquations, currentEquation]);
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
          <GridRight returnEquation={returnCurrentEquation} />
        </div>
      </div>
    </div>
  );
};

export default App;
