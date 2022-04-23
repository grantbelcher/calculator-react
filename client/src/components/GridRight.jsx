import React from "react";

function GridRight({ returnEquation, handleBackspace }) {
  return (
    <div className="buttons-right">
      <div className="right-row top">
        <div className="button">
          <i className="material-icons">percent</i>
        </div>
        <div className="button">
          <sup>a</sup>/<sub>b</sub>
        </div>
      </div>
      <div className="right-row top">
        <div className="button">
          <i className="material-icons">arrow_back</i>
        </div>
        <div className="button">
          <i className="material-icons">arrow_forward</i>
        </div>
      </div>
      <button
        className="right-row bottom button"
        onClick={() => handleBackspace()}
      >
        <i className="material-icons">backspace</i>
      </button>
      <button
        className="right-row bottom button"
        onClick={() => returnEquation()}
      >
        {/* <div className="button">&#11152;</div> */}
        &#11152;
      </button>
    </div>
  );
}

export default GridRight;
