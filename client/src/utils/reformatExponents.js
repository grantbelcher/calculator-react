// if (string === "+") return "⁺";
// if (string === "-") return "⁻";
// if (string === "*") return "˙";
// if (string === "/") return "ᐟ";
// if (string === "(") return "⁽";
// if (string === ")") return "⁾";

// // define array of exponents
// const exponents = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

export function reformatExponents(string) {
  string = string.replace(/⁰/g, "0");
  string = string.replace(/¹/g, "1");
  string = string.replace(/²/g, "2");
  string = string.replace(/³/g, "3");
  string = string.replace(/⁴/g, "4");
  string = string.replace(/⁵/g, "5");
  string = string.replace(/⁶/g, "6");
  string = string.replace(/⁷/g, "7");
  string = string.replace(/⁸/g, "8");
  string = string.replace(/⁺/g, "+");
  string = string.replace(/⁻/g, "-");
  string = string.replace(/˙/g, "*");
  string = string.replace(/ᐟ/g, "/");
  // need to add exponent instead of ** operator so that no other reformating function deletes it
  string = string.replace(/⁽/g, "exponent(");
  string = string.replace(/⁾/g, ")");

  return string;
}
