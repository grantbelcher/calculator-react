// export const updateExponentRanges = (range) => {
//   // find current equation
//   console.log(prevEquations[focus]);
//   let currentEquation = prevEquations[focus];

//   // define a variable to track if range is already present
//   let rangeIsPresent = false;

//   // iterate thru exponent ranges for current equation
//   for (let i = 0; i < currentEquation.exponentRanges.length; i++) {
//     // if the opening range  or closing range is already present

//     let openingRangeMatch = range[0] === currentEquation.exponentRanges[i][0];
//     let closingRangeMatch = range[1] === currentEquation.exponentRanges[i][1];
//     if (openingRangeMatch) {
//       rangeIsPresent = true;
//       // update opening range
//       console.log("opening match");
//     }

//     if (closingRangeMatch) {
//       // update closing range
//       rangeIsPresent = true;
//       console.log("closing match");
//     }
//   }
//   // if range is not present
//   if (!rangeIsPresent) {
//     //  add new range to exponent range list in current equation
//     prevEquations[focus].exponentRanges.push(range);
//   }
// };

export const handleExponents = (
  currentEquation,
  ref,
  exponential,
  setExponential,
  clickHandler,
  exponentRanges,
  setExponentRanges,
  focusIndex,
  secondPower
) => {
  console.log(secondPower, "second power");
  // check if app is already in exponent mode
  // const { inExponentMode } = exponential;
  // obtain a copy of the focused equation's expression
  let { expression } = currentEquation;
  // find cursor position
  const cursorIndex = ref.current.selectionStart;
  // find the char before cursor in focused expression
  const lastChar = expression[cursorIndex - 1];

  // if expression is empty, or previous value is a space
  if (expression.length === 0 || lastChar === " " || !lastChar) {
    // exponent buttons are disabled, do nothing
    console.log("DO NOTHING");
    setExponentRanges({
      ...exponentRanges,
    });
  } else {
    // make copy of ranges
    let updatedRanges = {
      ...exponentRanges,
    };

    // make a copy of current equation's list of ranges
    const listOfRanges = updatedRanges.lists[focusIndex];
    // if the equation already has an existing list of ranges
    console.log(listOfRanges, "list of ranges!!!!!");
    if (listOfRanges) {
      if (secondPower) {
        console.log("second power block");
        updatedRanges.lists[focusIndex] = [
          ...updatedRanges.lists[focusIndex],
          [cursorIndex, cursorIndex + 2],
        ];
        setExponentRanges(updatedRanges);
        clickHandler("⁽²⁾");
      } else {
        console.log("second power is false!!!");
        // make a copy of that list and add the new range to the list copy
        updatedRanges.lists[focusIndex] = [
          ...updatedRanges.lists[focusIndex],
          [cursorIndex, cursorIndex + 1],
        ];
        clickHandler("⁽⁾");
      }
      // if the equation does not have an existing list of ranges
    } else {
      // make a new list of equations
      if (secondPower) {
        updatedRanges.lists[focusIndex] = [[cursorIndex, cursorIndex + 2]];
        setExponentRanges(updatedRanges);
        clickHandler("⁽²⁾");
      } else {
        updatedRanges.lists[focusIndex] = [[cursorIndex, cursorIndex + 1]];
        setExponentRanges(updatedRanges);
        clickHandler("⁽⁾");
      }
    }

    // add the updated list of ranges to state

    // add the exponent parenthesis to equation
  }
  // refocus on equation
  ref.current.focus();
};
