import { evaluateNastyEquationWithPi } from "./reformatTermWithPi";
import { reformatAllTrig } from "./reformatTrigFunction";
import { reformatExponents } from "./reformatExponents";
import { rootToExponent } from "./reformatNthRoot";
import { finalReformat } from "./finalReformat";

export function calculate(string) {
  let output;
  // check if string is a single number
  let stringIsNaN = isNaN(Number(string));

  // check if string contains pi
  let indexOfPi = string.search("π");

  if (indexOfPi > -1) {
    string = evaluateNastyEquationWithPi(string);
  }

  if (string.includes("()")) {
    return "error";
  }

  // check if trig functions are present
  string = reformatAllTrig(string);
  console.log(string, "before 1st exponent reformat");

  string = rootToExponent(string);

  // reformat all exponents
  string = reformatExponents(string);
  console.log(string, "after 1st exponent reformat");
  // string = string.replace('')

  string = finalReformat(string);

  // need to replace exponent operator here so that no other reformating function deletes it
  string = string.replace(/exponent/g, "**");
  console.log(string, "after final exponent reformat");

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
