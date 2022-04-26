function reformatSin(expression) {
  return expression.replace(/sin/g, `*Math.sin`);
}
function reformatCos(expression) {
  return expression.replace(/cos/g, `*Math.cos`);
}
function reformatTan(expression) {
  return expression.replace(/tan/g, `*Math.tan`);
}

function reformatTrigFuncs(string) {
  let newString = reformatSin(string);
  newString = reformatCos(newString);
  newString = reformatTan(newString);
  return newString;
}

function multiplyAfterParenthesis(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ")" && string[i + 1] !== " " && string[i + 1] !== "*") {
      newString += string[i] + "*";
    } else {
      newString += string[i];
    }
  }
  return newString;
}

function removeExcessMultiplier(string) {
  // create a new array to store
  // split expression into individual elements
  let arrayOfElements = string.split(" ");
  // iterate over array of elements
  for (let i = 0; i < arrayOfElements.length; i++) {
    // if an element begins with a multiplier, then it is excess and needs to       be removed

    if (
      arrayOfElements[i][0] === "*" &&
      arrayOfElements[i][arrayOfElements[i].length - 1] === "*"
    ) {
      arrayOfElements[i] = arrayOfElements[i].slice(
        1,
        arrayOfElements[i].length - 1
      );
    } else if (arrayOfElements[i][0] === "*") {
      arrayOfElements[i] = arrayOfElements[i].slice(1);
    } else if (arrayOfElements[i][arrayOfElements[i].length - 1] === "*") {
      arrayOfElements = arrayOfElements[i].slice(
        0,
        arrayOfElements[i].length - 1
      );
    } else {
      arrayOfElements[i] = arrayOfElements[i];
    }
  }
  return arrayOfElements.join("");
}
