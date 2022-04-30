export function convertToExponent(string) {
  // define array of exponents
  const exponents = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
  // convert string to number
  const stringToNum = parseInt(string);
  // find and return exponent equivalent of string
  return exponents[stringToNum];
}
