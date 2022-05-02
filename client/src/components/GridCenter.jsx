import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";

function GridCenter({ clickHandler, disabled }) {
  const { theme } = useContext(ThemeContext);
  const operationTheme = `button operation-button-${theme}`;
  const numberTheme = `button num-button-${theme}`;
  return (
    <div className="grid-center">
      <button
        className={numberTheme}
        value={7}
        onClick={(e) => clickHandler(e.target.value)}
      >
        7
      </button>
      <button
        className={numberTheme}
        value={8}
        onClick={(e) => clickHandler(e.target.value)}
      >
        8
      </button>
      <button
        className={numberTheme}
        value={9}
        onClick={(e) => clickHandler(e.target.value)}
      >
        9
      </button>
      <button
        className={operationTheme}
        value="/"
        onClick={() => clickHandler(" / ")}
      >
        <i className="fas fa-divide"></i>
      </button>
      <button
        className={numberTheme}
        value={4}
        onClick={(e) => clickHandler(e.target.value)}
      >
        4
      </button>
      <button
        className={numberTheme}
        value={5}
        onClick={(e) => clickHandler(e.target.value)}
      >
        5
      </button>
      <button
        className={numberTheme}
        value={6}
        onClick={(e) => clickHandler(e.target.value)}
      >
        6
      </button>
      <button
        className={operationTheme}
        value="*"
        onClick={() => clickHandler(" * ")}
      >
        <i className="fas fa-times"></i>
      </button>
      <button
        className={numberTheme}
        value={1}
        onClick={(e) => clickHandler(e.target.value)}
      >
        1
      </button>
      <button
        className={numberTheme}
        value={2}
        onClick={(e) => clickHandler(e.target.value)}
      >
        2
      </button>
      <button
        className={numberTheme}
        value={3}
        onClick={(e) => clickHandler(e.target.value)}
      >
        3
      </button>
      <button
        className={operationTheme}
        value="-"
        onClick={() => clickHandler(" - ")}
      >
        <i className="fas fa-minus"></i>
      </button>
      <button
        className={numberTheme}
        value={0}
        onClick={(e) => clickHandler(e.target.value)}
      >
        0
      </button>
      <button
        className={numberTheme}
        value="."
        onClick={(e) => clickHandler(e.target.value)}
      >
        .
      </button>
      <button
        disabled={disabled}
        className={operationTheme}
        onClick={() => clickHandler("ans")}
      >
        ans
      </button>
      <button
        className={operationTheme}
        value="+"
        onClick={() => clickHandler(" + ")}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default GridCenter;
