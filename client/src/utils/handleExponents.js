export const handleExponents = (
  currentEquation,
  ref,
  exponential,
  setExponential
) => {
  // check if app is already in exponent mode
  const { inExponentMode } = exponential;
  // obtain a copy of the focused equation's expression
  let { expression } = currentEquation;
  // find cursor position
  const cursorIndex = ref.current.selectionStart;
  // find the char before cursor in focused expression
  const lastChar = expression[cursorIndex - 1];
  // if expression is empty, or previous value is a space
  if (
    inExponentMode ||
    expression.length === 0 ||
    lastChar === " " ||
    !lastChar
  ) {
    // exponent buttons are disabled
    setExponential({
      inExponentMode: false,
      exponentStart: null,
    });
  } else {
    setExponential({
      inExponentMode: true,
      exponentStart: cursorIndex - 1,
    });
  }
  ref.current.focus();
};