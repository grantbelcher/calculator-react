import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";

function GridRight({ returnEquation, handleBackspace }) {
  const { theme } = useContext(ThemeContext);

  const operationTheme = `button operation-button-${theme}`;
  const numberTheme = `button num-button-${theme}`;
  const returnTheme = `button focus-${theme}`;

  return (
    <div className="buttons-right">
      <div className="right-row top">
        <div className={operationTheme}>
          <i className="material-icons">percent</i>
        </div>
        <div className={operationTheme}>
          <sup>a</sup>/<sub>b</sub>
        </div>
      </div>
      <div className="right-row top">
        <div className={numberTheme}>
          <i className="material-icons">arrow_back</i>
        </div>
        <div className={numberTheme}>
          <i className="material-icons">arrow_forward</i>
        </div>
      </div>
      <button
        className={`right-row bottom ${numberTheme}`}
        onClick={() => handleBackspace()}
      >
        <i className="material-icons">backspace</i>
      </button>
      <button
        className={`right-row bottom ${returnTheme}`}
        onClick={() => returnEquation()}
      >
        {/* <div className="button">&#11152;</div> */}
        &#11152;
      </button>
    </div>
  );
}

export default GridRight;
