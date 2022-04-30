const operators = "⁺⁻⁼⁽˙ᐟ⁾";

export function convertToExponent(string) {
  string = string.trim();
  // if string is an operator, return subscript version
  if (string === "+") return "⁺";
  if (string === "-") return "⁻";
  if (string === "*") return "˙";
  if (string === "/") return "ᐟ";
  if (string === "(") return "⁽";
  if (string === ")") return "⁾";

  // define array of exponents
  const exponents = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
  // convert string to number
  const stringToNum = parseInt(string);
  // find and return exponent equivalent of string
  return exponents[stringToNum];
}
