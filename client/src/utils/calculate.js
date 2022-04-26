import { evaluateNastyEquationWithPi } from "./reformatTermWithPi";
import { reformatAllTrig } from "./reformatTrigFunction";

console.log(reformatAllTrig, "yoo");

export function calculate(string) {
  let output;
  // check if string is a single number
  let stringIsNaN = isNaN(Number(string));

  // check if string contains pi
  let indexOfPi = string.search("π");

  if (indexOfPi > -1) {
    string = evaluateNastyEquationWithPi(string);
  }

  // check if trig functions are present
  string = reformatAllTrig(string);

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
