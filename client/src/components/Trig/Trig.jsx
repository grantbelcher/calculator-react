import React from "react";

function Trig({ clickHandler }) {
  return (
    <div className="trig-functions">
      <div className="button">
        x<sup>2</sup>
      </div>
      <div className="button">
        x<sup>b</sup>
      </div>
      <div className="button">| a |</div>
      <div className="button">√ </div>
      <div className="button">
        <sup>n</sup>√
      </div>
      <button className="button" value="π" onClick={() => clickHandler("π")}>
        π
      </button>
      <button
        className="button"
        value="sin"
        onClick={() => clickHandler("sin(")}
      >
        sin
      </button>
      <button
        className="button"
        value="cos"
        onClick={() => clickHandler("cos(")}
      >
        cos
      </button>
      <button
        className="button"
        value="tan"
        onClick={() => clickHandler("tan(")}
      >
        tan
      </button>
      <button className="button" value="(" onClick={() => clickHandler("(")}>
        (
      </button>
      <button className="button" value=")" onClick={() => clickHandler(")")}>
        )
      </button>
      <button className="button" value="," onClick={() => clickHandler(",")}>
        ,
      </button>
    </div>
  );
}

export default Trig;
