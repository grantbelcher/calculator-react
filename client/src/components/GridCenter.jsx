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
      <button
        className="button"
        value={8}
        onClick={(e) => clickHandler(e.target.value)}
      >
        8
      </button>
      <button
        className="button"
        value={9}
        onClick={(e) => clickHandler(e.target.value)}
      >
        9
      </button>
      <button className="button" value="/" onClick={() => clickHandler(" / ")}>
        <i className="fas fa-divide"></i>
      </button>
      <button
        className="button"
        value={4}
        onClick={(e) => clickHandler(e.target.value)}
      >
        4
      </button>
      <button
        className="button"
        value={5}
        onClick={(e) => clickHandler(e.target.value)}
      >
        5
      </button>
      <button
        className="button"
        value={6}
        onClick={(e) => clickHandler(e.target.value)}
      >
        6
      </button>
      <button className="button" value="*" onClick={() => clickHandler(" * ")}>
        <i className="fas fa-times"></i>
      </button>
      <button
        className="button"
        value={1}
        onClick={(e) => clickHandler(e.target.value)}
      >
        1
      </button>
      <button
        className="button"
        value={2}
        onClick={(e) => clickHandler(e.target.value)}
      >
        2
      </button>
      <button
        className="button"
        value={3}
        onClick={(e) => clickHandler(e.target.value)}
      >
        3
      </button>
      <button className="button" value="-" onClick={() => clickHandler(" - ")}>
        <i className="fas fa-minus"></i>
      </button>
      <button
        className="button"
        value={0}
        onClick={(e) => clickHandler(e.target.value)}
      >
        0
      </button>
      <button
        className="button"
        value="."
        onClick={(e) => clickHandler(e.target.value)}
      >
        .
      </button>
      <div className="button">ans</div>
      <button className="button" value="+" onClick={() => clickHandler(" + ")}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default GridCenter;
