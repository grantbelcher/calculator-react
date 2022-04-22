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
      expression: "69",
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
    // console.log(
    //   prevEquations[focus].expression,
    //   "expression",
    //   value,
    //   "value",
    //   prevEquations[focus].expression + value,
    //   "update"
    // );

    let currentEquationCopy = {
      ...prevEquations[focus],
      expression: value,
    };

    console.log(currentEquationCopy);
    // FIND INDEX OF FOCUS,
    //create a copy of array before index,
    //copy of array after index,
    const prevEquationsAfterFocus = prevEquations.map((equation, index) => {
      if (index > focus) {
        return equation;
      }
    });
    // spread with new equation in between
    let prevEquationsCopy;
    if (prevEquationsAfterFocus.length > 1) {
      prevEquationsCopy = [currentEquationCopy, ...prevEquationsAfterFocus];
    } else {
      prevEquationsCopy = [currentEquationCopy];
    }
    console.log(currentEquationCopy, prevEquationsCopy);

    setPrevEquations(prevEquationsCopy);

    // const updatedExpression = currentEquationCopy.expression + value;

    // currentEquationCopy = {
    //   ...currentEquationCopy,
    //   expression: updatedExpression,
    // };
    // setCurrentEquation(currentEquationCopy);
    // FIND INDEX OF FOCUS,
    //create a copy of array before index,
    //copy of array after index,
    // const prevEquationsAfterFocus = prevEquations.map((equation, index) => {
    //   if (index > focus) return equation;
    // });
    // spread with new equation in between
    // const prevEquationsCopy = [currentEquationCopy, ...prevEquationsAfterFocus];
    // console.log(currentEquationCopy, prevEquationsCopy);

    // setPrevEquations(prevEquationsCopy);
  };

  const returnCurrentEquation = () => {
    const resetEquation = {
      expression: "",
      output: "",
    };
    setCurrentEquation(resetEquation);
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
