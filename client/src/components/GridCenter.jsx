import React from "react";

function GridCenter({ clickHandler }) {
  return (
    <div className="grid-center">
      <button
        className="button"
        value={7}
        onClick={(e) => clickHandler(e.target.value)}
      >
        7
      </button>
      <div className="button">8</div>
      <div className="button">9</div>
      <div className="button">
        <i className="fas fa-divide"></i>
      </div>
      <div className="button">4</div>
      <div className="button">5</div>
      <div className="button">6</div>
      <div className="button">
        <i className="fas fa-times"></i>
      </div>
      <div className="button">1</div>
      <div className="button">2</div>
      <div className="button">3</div>
      <div className="button">
        <i className="fas fa-minus"></i>
      </div>
      <div className="button">0</div>
      <div className="button">.</div>
      <div className="button">ans</div>
      <div className="button">
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
}

export default GridCenter;
