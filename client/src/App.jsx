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
import { handleExponents } from "./utils/handleExponents";
import { convertToExponent } from "./utils/convertToExponent";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const inputRef = useRef(null);

  const [prevEquations, setPrevEquations] = useState([
    {
      expression: "",
      output: "",
      forwardRef: inputRef,
      exponentRanges: [],
    },
  ]);

  const [clicks, setClicks] = useState(0);

  const [focus, setFocus] = useState(0);

  const [exponential, setExponential] = useState({
    inExponentMode: false,
    exponentStart: null,
  });

  const [exponentRanges, setExponentRanges] = useState({
    buttonIsDisabled: false,
    lists: [],
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    // focus on referenced input whenever focus state changes (up and down arrows)
    inputRef.current.focus();
    // move cursor to the end of referenced input when new input is focused
    console.log(inputRef.current.value.length + 1, "FOCUS USE EFFECT");
    // inputRef.current.selectionStart = inputRef.current.value.length + 1;
  }, [focus]);

  // useEffect(() => {
  //   // inputRef.current.focus();
  // }, [prevEquations.length]);

  // const [currentEquation, setCurrentEquation] = useState(prevEquations[focus]);

  const focusHandler = (indexOfEquation) => {
    setFocus(indexOfEquation);
  };

  const prevCount = usePrevious(clicks);

  useEffect(() => {
    // do something with absolute value instead of subtraction
    // const indexChange = clicks - prevCount;
    // console.log(indexChange, "before updating index change IN USE EFFECT");
    // updateCursorIndex(indexChange);

    // IF TRIG FUNCTION WAS ENTERED
    // if (indexChange === 5) {
    //   inputRef.current.selectionStart = clicks - 1;
    //   inputRef.current.selectionEnd = clicks - 1;
    //   setClicks(clicks - 1);
    // } else {
    //   inputRef.current.selectionStart = clicks;
    //   inputRef.current.selectionEnd = clicks;
    // }

    inputRef.current.selectionStart = clicks;
    inputRef.current.selectionEnd = clicks;
  }, [clicks]);

  // this is passed to handle exponents as an argument
  let currentEquation = prevEquations[focus];

  const toggleExponentMode = (test) => {
    // create an array in each equations state that will store exponent ranges
    // when exponent is toggled on, add an array of two elements, first is the start of the exponent range, second is the end of exponent range
    // in clickHandler, check the input selection start to see if it is within one of the ranges,
    // if in an exponent range, add the value as an exponent AND UPDATE THE END OF THE RANGE BY ONE!!!!
    handleExponents(
      currentEquation,
      inputRef,
      exponential,
      setExponential,
      clickHandler,
      exponentRanges,
      setExponentRanges,
      focus,
      false
    );
  };

  const handleSecondPower = () => {
    handleExponents(
      currentEquation,
      inputRef,
      exponential,
      setExponential,
      clickHandler,
      exponentRanges,
      setExponentRanges,
      focus,
      true
    );
  };

  // const findExponentRange = (range) => {
  //   let rangeIsPresent = false
  //   indexOfRange = null;
  //   // find current equation
  //   const currentEquationCopy = prevEquations[focus];
  //   // iterate thru exponent ranges
  //   for (let i = 0; i < currentEquationCopy.exponentRanges.length; i++) {
  //             // check if the opening range  or closing range is already present
  //             let openingRangeMatch = range[0] === currentEquationCopy.exponentRanges[i][0]
  //             let closingRangeMatch = range[1] === currentEquationCopy.exponentRanges[i][1]
  //             // if a range is a match
  //             if (openingRangeMatch || closingRangeMatch) {
  //               indexOfRange = i
  //             }
  //         }
  //   }

  // }

  // const updateExponentRanges = (range) => {

  //   if (!rangeIsPresent) {
  //     currentEquationCopy.exponentRanges.push(range)
  //   }

  //   // update Prev Equations List with updated equation

  //   let copy = [...prevEquations];
  //   let newCopyAfterIndex = copy.slice(focus + 1, copy.length);

  //   let newCopyBeforeIndex = copy.slice(0, focus);

  //   let prevEquationsCopy;
  //   prevEquationsCopy = [
  //     ...newCopyBeforeIndex,
  //     currentEquationCopy,
  //     ...newCopyAfterIndex,
  //   ];
  //   setPrevEquations(prevEquationsCopy);
  // };

  // d
  // asdsadas
  // da
  // sdsa
  // dsad
  // dda
  // dsa
  // dsds
  // sadsa
  // dsdsadas
  // asd
  // adss
  // adadsa
  // aadsadsadasd
  // dasdsad
  // saddsadsdasda
  // asdad
  // ssadadsadassd
  // sads
  // ad
  // sd
  // sadasdsdad
  // asdad
  // ssadadsaadads
  // dasds
  // adasd

  // find exponent ranges for focused equation
  const findExponentRanges = () => {
    const ranges = exponentRanges.lists[focus];
    return ranges;
  };

  const checkExponentRanges = (cursorIndex, listOfRanges) => {
    let cursorInRange = false;
    let indexOfRange = null;
    let range = null;
    // find exponent ranges
    for (let i = 0; i < listOfRanges.length; i++) {
      // if cursor Index is within range
      // greater than start range(cursor index), greater than or equal to end range
      if (
        cursorIndex > listOfRanges[i][0] &&
        cursorIndex <= listOfRanges[i][1]
      ) {
        cursorInRange = true;
        indexOfRange = i;
      } else if (cursorIndex === listOfRanges[i][1] + 1) {
        cursorInRange = false;
        indexOfRange = i;
      }
    }
    return {
      cursorInRange,
      indexOfRange,
      range,
    };
  };

  const clickHandler = (value) => {
    // create copy of focused equation
    let currentEquationCopy = {
      ...prevEquations[focus],
    };

    // get cursor index from inputRef
    const cursorIndex = inputRef.current.selectionStart;

    // find exponent ranges for focused equation
    const expRanges = findExponentRanges();
    // if a list of ranges already exists
    if (expRanges) {
      const { cursorInRange, indexOfRange } = checkExponentRanges(
        cursorIndex,
        expRanges
      );

      // check if value is an operator
      var isOperator = ["+", "-", "*", "/"].some((operator) => {
        // trim whitespace from value in case its an operator
        return operator === value.trim();
      });

      // check if the input character can be entered as an exponent
      const canBeExponent = !isNaN(value) || isOperator;

      // if cursor is in an exponent range and the character can be an exponent
      if (cursorInRange) {
        if (canBeExponent) {
          exponentRanges.lists[focus][indexOfRange][1] =
            exponentRanges.lists[focus][indexOfRange][1] + 1;
          // convert the values to tiny values before adding them
          value = convertToExponent(value);
        } else {
          // input charactar cannot be entered as an exponent
          return;
        }

        // update the current exponent range's end limit by 1
      } else {
        // do nothing?
        console.log(
          "cursor not in range, or values cant be converted to exponents"
        );
      }
    }

    // check if cursor index is in an exponent range of focused equation

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

    // newClickVal of 5 is a trig function, newClickVal of two is a set of parenthesis
    if (newClickVal === 5 || newClickVal === 2) {
      // set cursor within the parenthesis
      setClicks(cursorIndex + newClickVal - 1);
    } else {
      // if not trig or parenthesis, place cursor index after last entered character
      setClicks(cursorIndex + newClickVal);
    }

    inputRef.current.focus();

    // inputRef.current.selectionStart = cursorIndex;
    // inputRef.current.selectionEnd = cursorIndex;
  };

  // d
  // asdsadas
  // da
  // sdsa
  // dsad
  // dda
  // dsa
  // dsds
  // sadsa
  // dsdsadas
  // asd
  // adss
  // adadsa
  // aadsadsadasd
  // dasdsad
  // saddsadsdasda
  // asdad
  // ssadadsadassd
  // sads
  // ad
  // sd
  // sadasdsdad
  // asdad
  // ssadadsaadads
  // dasds
  // adasd

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
    console.log("test");
    // create a copy of focused equation
    let currentEquationCopy = {
      ...prevEquations[focus],
    };
    // determine the cursor position in the focused express
    let cursorIndex = inputRef.current.selectionStart;
    // if the cursor is at index 0 of the focused expression
    if (cursorIndex === 0) {
      // refocus on expression because focus was changed after button click
      inputRef.current.focus();
      // reset cursor index to 0 and do nothing else
      setClicks(0);
    } else {
      // get cursor index from inputRef
      const cursorIndex = inputRef.current.selectionStart;

      // find exponent ranges for focused equation
      const expRanges = findExponentRanges();
      // if a list of ranges already exists
      if (expRanges && expRanges.length > 0) {
        const { cursorInRange, indexOfRange } = checkExponentRanges(
          cursorIndex,
          expRanges
        );

        const rangeStart = exponentRanges.lists[focus][indexOfRange][0];
        const rangeEnd = exponentRanges.lists[focus][indexOfRange][1];

        if (cursorInRange && rangeStart + 1 === cursorIndex) {
          // delete both parenthesis
          const exponentListPt1 = exponentRanges.lists[focus].slice(
            0,
            indexOfRange
          );
          const exponentListPt2 = exponentRanges.lists[focus].slice(
            indexOfRange + 1
          );

          const updatedExponentRanges = [
            ...exponentListPt1,
            ...exponentListPt2,
          ];
          let listsCopy = exponentRanges.lists;
          listsCopy[focus] = updatedExponentRanges;
          setExponentRanges({
            ...exponentRanges,
            lists: listsCopy,
          });

          // make a copy of the expression in focused input
          const { expression: oldExpression } = currentEquationCopy;
          // // make a copy of the expression up to, but not including the start of the range
          const segmentBeforeCursor = oldExpression.slice(0, rangeStart);
          // // make a copy of the expression after the index to delete
          const segmentAfterCursor = oldExpression.slice(rangeEnd + 1);
          // // combine two copies to update the expression, now excluding the deleted character
          const updatedExpression = segmentBeforeCursor + segmentAfterCursor;
          // delete both parenthesis
          const output = calculate(updatedExpression);
          // recalculate with the updated expression
          // update the current equation copy with the updated expression and new output
          currentEquationCopy = {
            ...currentEquationCopy,
            expression: updatedExpression,
            output,
          };
          // make a copy of equation list stored in state
          let copy = [...prevEquations];

          // make a copy of eqution list up but not including the focused input,
          let newCopyBeforeIndex = copy.slice(0, focus);

          // make a copy of all equations in equation list after focused input
          let newCopyAfterIndex = copy.slice(focus + 1, copy.length);

          // combine the all copied equations and updated equation to make the updated list
          let prevEquationsCopy;
          prevEquationsCopy = [
            ...newCopyBeforeIndex,
            currentEquationCopy,
            ...newCopyAfterIndex,
          ];
          // update Equation list in state
          setPrevEquations(prevEquationsCopy);
          // refocus on current input after focus was lost due to button click
          inputRef.current.focus();
          // move the cursor back one index
          setClicks(cursorIndex - 1);
        } else if (cursorIndex === rangeEnd + 1) {
          // delete range from state
          const exponentListPt1 = exponentRanges.lists[focus].slice(
            0,
            indexOfRange
          );
          const exponentListPt2 = exponentRanges.lists[focus].slice(
            indexOfRange + 1
          );

          const updatedExponentRanges = [
            ...exponentListPt1,
            ...exponentListPt2,
          ];
          let listsCopy = exponentRanges.lists;
          listsCopy[focus] = updatedExponentRanges;
          setExponentRanges({
            ...exponentRanges,
            lists: listsCopy,
          });

          console.log(rangeStart, rangeEnd, "wtf?!?!?");
          // make a copy of the expression in focused input
          const { expression: oldExpression } = currentEquationCopy;
          // // make a copy of the expression up to, but not including the start of the range
          const segmentBeforeCursor = oldExpression.slice(0, rangeStart);
          // // make a copy of the expression after the index to delete
          const segmentAfterCursor = oldExpression.slice(cursorIndex);
          // // combine two copies to update the expression, now excluding the deleted character
          const updatedExpression = segmentBeforeCursor + segmentAfterCursor;
          // delete both parenthesis
          const output = calculate(updatedExpression);
          // recalculate with the updated expression
          // update the current equation copy with the updated expression and new output
          currentEquationCopy = {
            ...currentEquationCopy,
            expression: updatedExpression,
            output,
          };
          // make a copy of equation list stored in state
          let copy = [...prevEquations];

          // make a copy of eqution list up but not including the focused input,
          let newCopyBeforeIndex = copy.slice(0, focus);

          // make a copy of all equations in equation list after focused input
          let newCopyAfterIndex = copy.slice(focus + 1, copy.length);

          // combine the all copied equations and updated equation to make the updated list
          let prevEquationsCopy;
          prevEquationsCopy = [
            ...newCopyBeforeIndex,
            currentEquationCopy,
            ...newCopyAfterIndex,
          ];
          // update Equation list in state
          setPrevEquations(prevEquationsCopy);
          // refocus on current input after focus was lost due to button click
          inputRef.current.focus();
          // move the cursor back one index
          setClicks(cursorIndex - 1);

          // THIS IS TO PERFORM A NORMAL BACKSPACE WITHIN AN EXPONENT
        } else {
          // update exponent range before deleting
          exponentRanges.lists[focus][indexOfRange][1] =
            exponentRanges.lists[focus][indexOfRange][1] - 1;

          // make a copy of the expression in focused input
          const { expression: oldExpression } = currentEquationCopy;
          // make a copy of the expression up to, but not including the index to delete
          const segmentBeforeCursor = oldExpression.slice(0, cursorIndex - 1);
          // make a copy of the expression after the index to delete
          const segmentAfterCursor = oldExpression.slice(cursorIndex);
          // combine two copies to update the expression, now excluding the deleted character
          const updatedExpression = segmentBeforeCursor + segmentAfterCursor;
          const output = calculate(updatedExpression);
          // recalculate with the updated expression
          // update the current equation copy with the updated expression and new output
          currentEquationCopy = {
            ...currentEquationCopy,
            expression: updatedExpression,
            output,
          };
          // make a copy of equation list stored in state
          let copy = [...prevEquations];

          // make a copy of eqution list up but not including the focused input,
          let newCopyBeforeIndex = copy.slice(0, focus);

          // make a copy of all equations in equation list after focused input
          let newCopyAfterIndex = copy.slice(focus + 1, copy.length);

          // combine the all copied equations and updated equation to make the updated list
          let prevEquationsCopy;
          prevEquationsCopy = [
            ...newCopyBeforeIndex,
            currentEquationCopy,
            ...newCopyAfterIndex,
          ];
          // update Equation list in state
          setPrevEquations(prevEquationsCopy);
          // refocus on current input after focus was lost due to button click
          inputRef.current.focus();
          // move the cursor back one index
          setClicks(cursorIndex - 1);
        }
        // DELETE NORMAL
      } else {
        console.log("else");
        // make a copy of the expression in focused input
        const { expression: oldExpression } = currentEquationCopy;
        // make a copy of the expression up to, but not including the index to delete
        const segmentBeforeCursor = oldExpression.slice(0, cursorIndex - 1);
        // make a copy of the expression after the index to delete
        const segmentAfterCursor = oldExpression.slice(cursorIndex);
        // combine two copies to update the expression, now excluding the deleted character
        const updatedExpression = segmentBeforeCursor + segmentAfterCursor;
        const output = calculate(updatedExpression);
        // recalculate with the updated expression
        // update the current equation copy with the updated expression and new output
        currentEquationCopy = {
          ...currentEquationCopy,
          expression: updatedExpression,
          output,
        };
        // make a copy of equation list stored in state
        let copy = [...prevEquations];

        // make a copy of eqution list up but not including the focused input,
        let newCopyBeforeIndex = copy.slice(0, focus);

        // make a copy of all equations in equation list after focused input
        let newCopyAfterIndex = copy.slice(focus + 1, copy.length);

        // combine the all copied equations and updated equation to make the updated list
        let prevEquationsCopy;
        prevEquationsCopy = [
          ...newCopyBeforeIndex,
          currentEquationCopy,
          ...newCopyAfterIndex,
        ];
        // update Equation list in state
        setPrevEquations(prevEquationsCopy);
        // refocus on current input after focus was lost due to button click
        inputRef.current.focus();
        // move the cursor back one index
        setClicks(cursorIndex - 1);
      }
    }
  };

  const returnCurrentEquation = () => {
    const resetEquation = {
      expression: "",
      output: "",
      forwardRef: inputRef,
      exponentRanges: [],
      carrotIndex: 0,
    };
    const prevEquationsCopy = [...prevEquations];

    if (focus === 0) {
      // update the index identifying of every exponent range stored in state
      // access exp range state
      const exponentRangesCopy = exponentRanges;
      const { lists } = exponentRangesCopy;
      // create a new list of exponent ranges, index 0 is a new list for the new equation that is being created
      let newList = [[]];
      // iterate thru lists
      for (let i = 0; i < lists.length; i++) {
        // push each list to the new list, this will increment the identifier index by 1 to reflect its new index in equation list
        newList.push(lists[i]);
      }
      setExponentRanges({
        ...exponentRanges,
        lists: newList,
      });
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
          exponentRanges: [],
          carrotIndex: 0,
        },
      ]);
      // reset all exponent ranges
      setExponentRanges({
        buttonIsDisabled: false,
        lists: [],
      });

      inputRef.current.focus();
    } else {
      // clear all exponent ranges for equation to be cleared
      const exponentRangesCopy = exponentRanges;
      const listCopy = exponentRangesCopy.lists;
      listCopy[focus] = [];

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
          <Trig
            clickHandler={clickHandler}
            handleExponents={() => toggleExponentMode()}
            handleSecondPower={() => handleSecondPower()}
          />
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
