import React from "react";

function Trig({ handlePi }) {
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
      <button className="button" value="π" onClick={() => handlePi("π")}>
        π
      </button>
      <div className="button">sin</div>
      <div className="button">cos</div>
      <div className="button">tan</div>
      <div className="button">(</div>
      <div className="button">)</div>
      <div className="button">,</div>
    </div>
  );
}

export default Trig;
