import React from "react";

function GridRight() {
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
      <div className="right-row bottom">
        <div className="button">
          <i className="material-icons">backspace</i>
        </div>
      </div>
      <div className="right-row bottom">
        <div className="button">&#11152;</div>
      </div>
    </div>
  );
}

export default GridRight;
