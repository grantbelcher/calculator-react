import React, { useState, useEffect, useRef } from "react";
import Test from "./components/Test/Test";
import Trig from "./components/Trig/Trig";
import GridCenter from "./components/GridCenter";
import GridRight from "./components/GridRight";
import Options from "./components/Options";
import Equations from "./components/Equations";
import { calculate } from "./utils/calculate";

const App = () => {
  const inputRef = useRef(null);

  const [prevEquations, setPrevEquations] = useState([
    {
      expression: "",
      output: "",
      forwardRef: inputRef,
    },
  ]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [prevEquations.length]);

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
    let currentEquationCopy = {
      ...prevEquations[focus],
    };
    currentEquationCopy = {
      ...currentEquationCopy,
      expression: currentEquationCopy.expression + value,
    };
    let copy = [...prevEquations];
    let newCopyAfterIndex = copy.slice(focus + 1, copy.length);

    let newCopyBeforeIndex = copy.slice(0, focus);

    let prevEquationsCopy;
    prevEquationsCopy = [
      ...newCopyBeforeIndex,
      currentEquationCopy,
      ...newCopyAfterIndex,
    ];
    setPrevEquations(prevEquationsCopy);
    inputRef.current.focus();
  };

  const keyPressHandler = (value) => {
    const output = calculate(value);
    let currentEquationCopy;
    if (output === "err") {
      currentEquationCopy = {
        ...prevEquations[focus],
        expression: value,
        output: "",
      };
    } else {
      currentEquationCopy = {
        ...prevEquations[focus],
        expression: value,
        output,
      };
    }

    let copy = [...prevEquations];
    let newCopyAfterIndex = copy.slice(focus + 1, copy.length);

    let newCopyBeforeIndex = copy.slice(0, focus);

    let prevEquationsCopy;
    prevEquationsCopy = [
      ...newCopyBeforeIndex,
      currentEquationCopy,
      ...newCopyAfterIndex,
    ];
    setPrevEquations(prevEquationsCopy);
  };

  const returnCurrentEquation = () => {
    const resetEquation = {
      expression: "",
      output: "",
      forwardRef: inputRef,
    };
    const prevEquationsCopy = [...prevEquations];
    if (focus === 0) {
      setPrevEquations([resetEquation, ...prevEquationsCopy]);
    } else {
      setPrevEquations(prevEquationsCopy);
    }
  };

  return (
    <div className="container">
      <Equations
        prevEquations={prevEquations}
        // currentEquation={currentEquation}
        handleKeyPress={keyPressHandler}
        handleFocus={focusHandler}
        inputRef={inputRef}
        focus={focus}
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
