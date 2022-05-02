export function rootToExponent(string) {
  // array to store all indexes of '√'
  let rootIndexes = [];

  // iterate over string
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "√") {
      // find  all indexes of √
      rootIndexes.push(i);
    }
  }
  // if roots exist
  if (rootIndexes.length > 0) {
    let newString = "";

    // create an array to store distances to end of root element
    let distancesToClose = [];
    // create an array to store // distances to begining of root
    let indexesOfRootStart = [];
    let coefficientCopies = [];
    for (let i = 0; i < rootIndexes.length; i++) {
      let indexChangeForward = string.slice(rootIndexes[i]).search(/\)/);
      distancesToClose.push(indexChangeForward);
      let rootStart = string.slice(0, rootIndexes[i]).lastIndexOf("⁽");
      indexesOfRootStart.push(rootStart);
      // make a copy of coefficents to move
      let coefficientCopy = string.slice(rootStart, rootIndexes[i]);

      coefficientCopy =
        coefficientCopy.slice(0, 1) + "¹ᐟ" + coefficientCopy.slice(1);

      coefficientCopies.push(coefficientCopy);
    }

    console.log(
      indexesOfRootStart,
      rootIndexes,
      distancesToClose,
      coefficientCopies
    );

    for (let i = 0; i < rootIndexes.length; i++) {
      // console.log(newString)
      if (i === 0) {
        newString =
          string.slice(0, indexesOfRootStart[i]) +
          string.slice(
            rootIndexes[i],
            rootIndexes[i] + distancesToClose[i] + 1
          ) +
          coefficientCopies[i] +
          string.slice(
            rootIndexes[i] + distancesToClose[i] + 1,
            indexesOfRootStart[i + 1]
          );
      } else {
        newString =
          newString.slice(0, indexesOfRootStart[i]) +
          string.slice(
            rootIndexes[i],
            rootIndexes[i] + distancesToClose[i] + 1
          ) +
          coefficientCopies[i] +
          string.slice(
            rootIndexes[i] + distancesToClose[i] + 1,
            indexesOfRootStart[i + 1]
          );
      }
    }

    newString = newString.replace(/√/g, "");
    console.log(newString);
    return newString;
  } else {
    return string;
  }
}
