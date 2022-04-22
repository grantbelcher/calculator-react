export function calculate(string) {
  let output;
  try {
    output = eval(string);
    // var d = eval("x + 17 + ");
  } catch (error) {
    output = "err";
  }
  return output;
}
