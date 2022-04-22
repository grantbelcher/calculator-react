export function calculate(string) {
  let output;

  // check if string is a single number
  let stringIsNaN = isNaN(Number(string));

  // if string is a single number
  // do not return output

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
