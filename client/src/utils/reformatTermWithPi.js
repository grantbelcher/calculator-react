function findAllIndexOfPi(string) {
  // create empty array to store indices on which pi occurs in a string
  let indexes = [];
  // iterate thru term
  for (let i = 0; i < string.length; i++) {
    // if the character pi is found
    if (string[i] === "π") {
      // add index of pi to array
      indexes.push(i);
    }
  }
  // return all indices of a string on which PI occurs
  return indexes;
}

// string is the term in whcih many numbers are multiplied by many pi's, indexes are the indices of the string on which Pi occurs
function replacePi(string, indexes) {
  // create an array to store new segments of the dirty term containing many Pi;s
  let newString = [];
  // iterate over the string
  for (let i = 0; i < string.length; i++) {
    // if a character other than Pi is stored at the current index of the string
    if (!indexes.includes(i)) {
      // add the non-pi character to the array that we will join
      newString.push(string[i]);
      // otherwise, we know that the char at the index is Pi
    } else {
      // instead of adding the character pi, we will add the javascript representation that the eval function can read
      // we will also surround it with multiplication signs to automatically multiply it with the surounding terms
      newString.push("*Math.PI*");
    }
  }
  // return the array of all elements of the term, that we will join together into the appropriate format
  return newString;
}
// call this function  with a nasty term with many Pis multiplied by many factors
function reformatTermsWithPi(string) {
  // find all indices of Pi in nasty string
  const allIndexes = findAllIndexOfPi(string);
  // replace Pi with Math.Pi in a format that JS eval function can read
  // WAIT WAIT WAIT, If something breaks check here because i replaced myTest with string
  const result = replacePi(string, allIndexes);
  // join all the elements of array stored in result
  const joinedString = result.join("");
  // split the string based on duplicated multiplication signs that will result from calling replacePi
  const removeDuplicates = joinedString.split("**");
  // rejoin the array without ** duplicates with only a single *
  let rejoin = removeDuplicates.join("*");

  // trim * off the front of term which will occur if pi is the first character
  if (rejoin[0] === "*") {
    rejoin = rejoin.slice(1);
  }
  // trim * off the back of term which will occur if pi is the last character
  if (rejoin[rejoin.length - 1] === "*") {
    rejoin = rejoin.slice(0, rejoin.length - 1);
  }
  return rejoin;
}

// uncomment and run the final function to test
// const myTest = 'π23π2443ππ4π23ππ'
// reformatTermsWithPi(myTest)

let equation = "23π + π + 22 - 2π3 + ππ + 23π2443ππ4π23 + ππ3 + 2ππ + ππ3ππ23";

export function evaluateNastyEquationWithPi(eq) {
  // split eq based on operators
  const componentsOfEquation = eq.split(" ");
  // create array of reformated terms containing pI
  const reformattedTerms = componentsOfEquation.map((term) => {
    if (term === "+" || term === "-" || term === "/" || term === "*") {
      return term;
    } else {
      return reformatTermsWithPi(term);
    }
  });
  const joinAllTerms = reformattedTerms.join("");
  return joinAllTerms;
}
