export const handleExponents = (currentEquation, ref, setExponential) => {
  // obtain a copy of the focused equation's expression
  let { expression } = currentEquation;
  // find cursor position
  const cursorIndex = ref.current.selectionStart;
  // find the char before cursor in focused expression
  const lastChar = expression[cursorIndex - 1];
  // if expression is empty, or previous value is a space
  if (expression.length === 0 || lastChar === " " || !lastChar) {
    // exponent buttons are disabled
    console.log("worked!");
  } else {
    setExponential({
      inExponentMode: true,
      exponentStart: cursorIndex - 1,
    });
  }
  ref.current.focus();
};
