function findAllIndexOfPi(string) {
  // create empty array to store indices on which pi occurs in a string
  let indexes = [];
  // iterate thru term
  for (i = 0; i < string.length; i++) {
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
  for (i = 0; i < string.length; i++) {
    if (!indexes.includes(i)) {
      newString.push(string[i]);
    } else {
      newString.push("*Math.PI*");
    }
  }
  return newString;
}

function reformatTermsWithPi(string) {
  const allIndexes = findAllIndexOfPi(string);
  const result = replacePi(myTest, allIndexes);
  const joinedString = result.join("");
  const removeDuplicates = joinedString.split("**");
  let rejoin = removeDuplicates.join("*");

  if (rejoin[0] === "*") {
    rejoin = rejoin.slice(1);
  }

  if (rejoin[rejoin.length - 1] === "*") {
    rejoin = rejoin.slice(0, rejoin.length - 1);
  }
  return rejoin;
}
