import React, { useState, useEffect, useRef, useContext } from "react";
import usePrevious from "./utils/usePrevious";
import { ThemeContext } from "./context/theme";
import Test from "./components/Test/Test";
import Trig from "./components/Trig/Trig";
import GridCenter from "./components/GridCenter";
import GridRight from "./components/GridRight";
import Options from "./components/Options";
import Equations from "./components/Equations";
import { calculate } from "./utils/calculate";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const inputRef = useRef(null);

  const [prevEquations, setPrevEquations] = useState([
    {
      expression: "",
      output: "",
      forwardRef: inputRef,
      carrotIndex: 0,
    },
  ]);

  const [clicks, setClicks] = useState(0);

  const [focus, setFocus] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    // focus on referenced input whenever focus state changes (up and down arrows)
    inputRef.current.focus();
    // move cursor to the end of referenced input when new input is focused
    inputRef.current.selectionStart = inputRef.current.value.length + 1;
  }, [focus]);

  // useEffect(() => {
  //   // inputRef.current.focus();
  // }, [prevEquations.length]);

  // const [currentEquation, setCurrentEquation] = useState(prevEquations[focus]);

  const focusHandler = (indexOfEquation) => {
    setFocus(indexOfEquation);
  };

  const prevCount = usePrevious(clicks);

  const updateCursorIndex = (indexChange) => {
    let currentEquationCopy = {
      ...prevEquations[focus],
    };
    // set the new carrot/cursor position of focused input when a button is clickd
    // removes the wierd highlighting bug when editing an expression with buttons
    inputRef.current.selectionStart =
      currentEquationCopy.carrotIndex + indexChange;
    inputRef.current.selectionEnd =
      currentEquationCopy.carrotIndex + indexChange;
  };

  useEffect(() => {
    console.log(clicks, prevCount, "callback");
    const indexChange = clicks - prevCount;
    updateCursorIndex(indexChange);
  }, [clicks]);

  const clickHandler = (value) => {
    let currentEquationCopy = {
      ...prevEquations[focus],
    };

    const cursorIndex = inputRef.current.selectionStart;

    const updatedExpression =
      // the segment of expression BEFORE CURSOR POSITION
      currentEquationCopy.expression.slice(0, cursorIndex) +
      // VALUE TO BE INSERTED
      value +
      // the segment of expression AFTER CURSOR POSITION
      currentEquationCopy.expression.slice(cursorIndex);

    const output = calculate(updatedExpression);
    currentEquationCopy = {
      ...currentEquationCopy,
      expression: updatedExpression,
      output,
      carrotIndex: cursorIndex,
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
    let newClickVal = value.length;
    setClicks(clicks + newClickVal);
    inputRef.current.focus();

    // inputRef.current.selectionStart = cursorIndex;
    // inputRef.current.selectionEnd = cursorIndex;
  };

  const arrowHandler = (value) => {
    if (value === "left") {
      inputRef.current.focus();
      const cursorPosition = inputRef.current.selectionStart;
      inputRef.current.selectionStart = cursorPosition - 1;
      inputRef.current.selectionEnd = cursorPosition - 1;
    }
    if (value === "right") {
      inputRef.current.focus();
      const cursorPosition = inputRef.current.selectionStart;
      inputRef.current.selectionStart = cursorPosition + 1;
      // inputRef.current.selectionEnd = cursorPosition + 2;
    }
    inputRef.current.focus();
  };

  const keyPressHandler = (value) => {
    //DETECT BACKSPACE KEYPRESS
    // find length of focused expression before keypress
    let oldExpressionLength = prevEquations[focus].expression.length;
    // compare to current length of value to determine if backspace was pressed
    let backspaceKeypress = oldExpressionLength > value.length;

    // find last char of string
    let lastChar = value[value.length - 1];

    // if backspace was pressed
    if (backspaceKeypress) {
      // determine if an operator is being deleted
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {
        // if an operator is being deleted, remove the operator and all white space around it
        value = value.slice(0, value.length - 3);
      }
    }

    // if lastChar is an operator
    lastChar = value[value.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      // insert a space in value before operator
      let stringBeforeOperator = value.slice(0, value.length - 1);
      // insert a space in value after operator
      let updatedString = stringBeforeOperator + " " + lastChar + " ";
      value = updatedString;
    }

    const output = calculate(value);

    let currentEquationCopy = {
      ...prevEquations[focus],
      expression: value,
      //// track carrot index
      output,
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
  };

  const handlePi = (pi) => {
    let currentEquationCopy = {
      ...prevEquations[focus],
    };
    let { expression } = currentEquationCopy;
    expression += "π";
    expression = calculate(expression);
    console.log(expression);
  };

  const refocusOnIndex = (index) => {
    console.log(inputRef.current, index);
    inputRef.current.focus();
    inputRef.current.selectionStart = index;
  };

  const handleBackspace = () => {
    let currentEquationCopy = {
      ...prevEquations[focus],
    };

    let cursorIndex = inputRef.current.selectionStart;

    const { expression: oldExpression } = currentEquationCopy;

    const segmentBeforeCursor = oldExpression.slice(0, cursorIndex - 1);
    const segmentAfterCursor = oldExpression.slice(cursorIndex);

    const updatedExpression = segmentBeforeCursor + segmentAfterCursor;

    const output = calculate(updatedExpression);
    currentEquationCopy = {
      ...currentEquationCopy,
      expression: updatedExpression,
      carrotIndex: cursorIndex - 2,
      output,
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
    let newClickVal = clicks ? false : true;
    inputRef.current.focus();
    setClicks(newClickVal);
  };

  const returnCurrentEquation = () => {
    const resetEquation = {
      expression: "",
      output: "",
      forwardRef: inputRef,
      carrotIndex: 0,
    };
    const prevEquationsCopy = [...prevEquations];
    if (focus === 0) {
      setPrevEquations([resetEquation, ...prevEquationsCopy]);
    } else {
      setPrevEquations(prevEquationsCopy);
    }
    inputRef.current.focus();
  };

  //
  const shouldClearAll =
    prevEquations.length > 1 && prevEquations[focus].expression.length === 0;

  const clearEquations = () => {
    if (shouldClearAll) {
      setFocus(0);
      setPrevEquations([
        {
          expression: "",
          output: "",
          forwardRef: inputRef,
          carrotIndex: 0,
        },
      ]);
      inputRef.current.focus();
    } else {
      // set value of input to be blank
      keyPressHandler("");
      inputRef.current.focus();
    }
  };

  const containerTheme = `background-${theme}`;
  const calcTheme = `buttons-bg-${theme}`;

  return (
    <div className={`container ${containerTheme}`}>
      <Equations
        prevEquations={prevEquations}
        // currentEquation={currentEquation}
        handleKeyPress={keyPressHandler}
        handleFocus={focusHandler}
        inputRef={inputRef}
        focus={focus}
        handleReturn={returnCurrentEquation}
      />
      <div className={`calculator-api ${calcTheme}`}>
        <Options clearEquations={clearEquations} clearAll={shouldClearAll} />
        <div className="bottom-section">
          <Trig clickHandler={clickHandler} />
          <GridCenter clickHandler={clickHandler} />
          <GridRight
            handleBackspace={handleBackspace}
            arrowHandler={arrowHandler}
            returnEquation={returnCurrentEquation}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
