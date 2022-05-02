export const handleNthRoot = (
  currentEquation,
  ref,
  clickHandler,
  exponentRanges,
  setExponentRanges,
  focusIndex,
  squareRoot
) => {
  //   // obtain a copy of the focused equation's expression
  let { expression } = currentEquation;
  //   // find cursor position
  const cursorIndex = ref.current.selectionStart;
  //   // find the char before cursor in focused expression
  //   const lastChar = expression[cursorIndex - 1];
  //     // make copy of ranges
  let updatedRanges = {
    ...exponentRanges,
  };

  //     // make a copy of current equation's list of ranges
  const listOfRanges = updatedRanges.lists[focusIndex];
  if (listOfRanges) {
    if (squareRoot) {
      console.log("square root");
      updatedRanges.lists[focusIndex] = [
        ...updatedRanges.lists[focusIndex],
        [cursorIndex, cursorIndex + 2],
      ];
      setExponentRanges(updatedRanges);
      clickHandler("⁽²⁾√()");
    } else {
      console.log("square root is false!!!");
      // make a copy of that list and add the new range to the list copy
      updatedRanges.lists[focusIndex] = [
        ...updatedRanges.lists[focusIndex],
        [cursorIndex, cursorIndex + 1],
      ];
      clickHandler("⁽⁾√()");
    }
  } else {
    if (squareRoot) {
      updatedRanges.lists[focusIndex] = [[cursorIndex, cursorIndex + 2]];
      setExponentRanges(updatedRanges);
      clickHandler("⁽²⁾√()");
    } else {
      updatedRanges.lists[focusIndex] = [[cursorIndex, cursorIndex + 1]];
      setExponentRanges(updatedRanges);
      clickHandler("⁽⁾√()");
    }
  }
  // refocus on equation
  ref.current.focus();
};
//         console.log("second power is false!!!");
//         // make a copy of that list and add the new range to the list copy
//         updatedRanges.lists[focusIndex] = [
//           ...updatedRanges.lists[focusIndex],
//           [cursorIndex, cursorIndex + 1],
//         ];
//         clickHandler("⁽⁾");
//       }
//       // if the equation does not have an existing list of ranges
//     } else {
//       // make a new list of equations
//       if (secondPower) {
//         updatedRanges.lists[focusIndex] = [[cursorIndex, cursorIndex + 2]];
//         setExponentRanges(updatedRanges);
//         clickHandler("⁽²⁾");
//       } else {
//         updatedRanges.lists[focusIndex] = [[cursorIndex, cursorIndex + 1]];
//         setExponentRanges(updatedRanges);
//         clickHandler("⁽⁾");
//       }
//     }

//     // add the updated list of ranges to state

//     // add the exponent parenthesis to equation
//   }
//   // refocus on equation
//   ref.current.focus();
// };
