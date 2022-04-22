import React, { useState, useEffect } from "react";
import Test from "./components/Test/Test";
import Trig from "./components/Trig/Trig";
import GridCenter from "./components/GridCenter";
import GridRight from "./components/GridRight";
import Options from "./components/Options";
import Equations from "./components/Equations";

const App = () => {
  const [prevEquations, setPrevEquations] = useState([
    {
      expression: "",
      output: "",
    },
  ]);
  const [focus, setFocus] = useState(0);
  // const [currentEquation, setCurrentEquation] = useState(prevEquations[focus]);

  const focusHandler = (indexOfEquation) => {
    console.log(indexOfEquation);
    setFocus(indexOfEquation);
  };

  // const clickHandler = (value) => {
  //   let currentEquationCopy = {
  //     ...prevEquations[focus],
  //   };
  //   currentEquationCopy = {
  //     ...currentEquationCopy,
  //     expression: currentEquationCopy.expression + value,
  //   };
  //   setCurrentEquation(currentEquationCopy);
  // };

  const clickHandler = (value) => {
    // let currentEquationCopy = {
    //   ...prevEquations[focus],
    // };
    // currentEquationCopy = {
    //   ...currentEquationCopy,
    //   expression: currentEquationCopy.expression + value,
    // };
    // setCurrentEquation(currentEquationCopy);
  };

  const keyPressHandler = (value) => {
    let currentEquationCopy = {
      ...prevEquations[focus],
      expression: value,
    };

    let copy = [...prevEquations];
    let newCopy = copy.slice(focus + 1, copy.length);

    let prevEquationsCopy;
    if (newCopy.length > 0) {
      prevEquationsCopy = [currentEquationCopy, ...newCopy];
    } else {
      prevEquationsCopy = [currentEquationCopy];
    }

    setPrevEquations(prevEquationsCopy);
  };

  const returnCurrentEquation = () => {
    const resetEquation = {
      expression: "",
      output: "",
    };
    const prevEquationsCopy = [...prevEquations];
    setPrevEquations([resetEquation, ...prevEquationsCopy]);
  };

  // useEffect(() => {
  //   setPrevEquations([...prevEquations, currentEquation]);
  // }, [currentEquation]);

  return (
    <div className="container">
      <Equations
        prevEquations={prevEquations}
        // currentEquation={currentEquation}
        handleKeyPress={keyPressHandler}
        handleFocus={focusHandler}
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
