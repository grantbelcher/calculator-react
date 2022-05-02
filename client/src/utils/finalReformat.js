function removeSpaces(string) {
  // create a blank string to store all chars that are not white space
  let stringWithoutSpace = "";
  // iterate over input string
  for (let i = 0; i < string.length; i++) {
    // if a char is not whitespace
    if (string[i] !== " ") {
      // add to our output variable
      stringWithoutSpace += string[i];
    }
  }
  // return input string without white space
  return stringWithoutSpace;
}

function removeMultiplierAroundOperators(string) {
  // find all '(*' replace with "("
  string = string.replace(/\(\*/g, "(");
  // find all '*)' replace with ")"
  string = string.replace(/\*\)/g, ")");
  // find all '*+' replace with "+"
  string = string.replace(/\*\+/g, "+");
  // find all '+*' replace with "+"
  string = string.replace(/\+\*/g, "+");
  // find all '*-' replace with "-"
  // string = string.replace(/\*\-/g, "-");
  // find all '-*' replace with "-"
  string = string.replace(/\-\*/g, "-");
  // find all '**' replace with "*"
  string = string.replace(/\*\*/g, "*");
  // find all '*/' replace with "/"
  string = string.replace(/\*\//g, "/");
  // find all '/*' replace with "/"
  string = string.replace(/\/\*/g, "/");

  return string;
}

export function finalReformat(string) {
  let stringWithoutSpaces = removeSpaces(string);
  let finalFormat = removeMultiplierAroundOperators(stringWithoutSpaces);
  return finalFormat;
}
