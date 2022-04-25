import { evaluateNastyEquationWithPi } from "./reformatTermWithPi";

export function calculate(string) {
  let output;
  console.log(evaluateNastyEquationWithPi, "look here");
  // check if string is a single number
  let stringIsNaN = isNaN(Number(string));

  // check if string contains pi
  // let indexOfPi = string.search("π");

  // if (indexOfPi > -1) {

  //   // find all indexes of pi

  //   console.log(indexOfPi);
  //   // use the index of pi, remove pi
  //   const stringBeforePi = string.slice(0, indexOfPi);
  //   const stringAfterPi = string.slice(indexOfPi + 1);
  //   // console.log(stringBeforePi, stringAfterPi);
  //   const updatedString = stringBeforePi + "Math.PI";
  // }
  // // if string is a single number
  // // do not return output

  // if string is an expression or NaN
  if (stringIsNaN) {
    // evaluate
    try {
      // evaluate string
      output = eval(string);
      // var d = eval("x + 17 + ");
    } catch (error) {
      // add error message if expression syntax is incorrect
      output = "error";
    }
    return output;
  } else {
    return null;
  }
}
