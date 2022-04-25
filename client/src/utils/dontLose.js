const myTest = "π23π2443ππ4π23ππ";

function findAllIndexOfPi(string) {
  let indexes = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] === "π") {
      indexes.push(i);
    }
  }
  return indexes;
}

function replacePi(string, indexes) {
  let newString = [];
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
  const result = replacePi(string, allIndexes);
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

let result = reformatTermsWithPi(myTest);

console.log(eval(result));
