function trigFunctionPresent(expression) {
  if (expression.search("sin") >= 0) return true;
  if (expression.search("cos") >= 0) return true;
  if (expression.search("tan") >= 0) return true;
  return false;
}

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
  if (newString[0] === "*") {
    newString = newString.slice(1);
  }
  if (newString[newString.length - 1] === "*") {
    newString = newString.slice(0, newString.length - 1);
  }
  return newString;
}

export function removeExcessMultiplier(string) {
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
        arrayOfElements[i].length - 2
      );
    } else {
      arrayOfElements[i] = arrayOfElements[i];
    }
  }
  if (Array.isArray(arrayOfElements)) {
    return arrayOfElements.join("");
  } else {
    return arrayOfElements;
  }
  return arrayOfElements.join("");
}

export function reformatAllTrig(string) {
  // determine if Trig Functions are present
  const trigIsPresent = trigFunctionPresent(string);

  // if trig functions are present, reformat the expression, otherwise return
  if (trigIsPresent === false) {
    return string;
  }
  // replace sin,cos,tan in string with '*Math.sin, *Math.cos, *Math.tan'
  let expression = reformatTrigFuncs(string);
  // add a '*' after each trig function for automatic multiplication
  expression = multiplyAfterParenthesis(expression);
  // remove excess '*' that will break eval equation
  // let formattedExpression = removeExcessMultiplier(expression);
  // console.log(formattedExpression);
  // return formattedExpression;
  console.log(expression, "look here");
  return expression;
}
