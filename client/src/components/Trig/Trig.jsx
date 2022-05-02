import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";

function Trig({ clickHandler, handleExponents, handleSecondPower }) {
  const { theme } = useContext(ThemeContext);
  const buttonTheme = `button operation-button-${theme}`;

  const squareValue = () => {
    clickHandler("⁽⁾");
  };

  return (
    <div className="trig-functions">
      <button className={buttonTheme} onClick={() => handleSecondPower()}>
        x<sup>2</sup>
      </button>
      <button className={buttonTheme} onClick={() => handleExponents()}>
        x<sup>b</sup>
      </button>
      <button className={buttonTheme}>|a|</button>
      <button className={buttonTheme}>√ </button>
      <button className={buttonTheme}>
        <sup>n</sup>&radic;
      </button>
      <button
        className={buttonTheme}
        value="π"
        onClick={() => clickHandler("π")}
      >
        π
      </button>
      <button
        className={buttonTheme}
        value="sin"
        onClick={() => clickHandler("sin()")}
      >
        sin
      </button>
      <button
        className={buttonTheme}
        value="cos"
        onClick={() => clickHandler("cos()")}
      >
        cos
      </button>
      <button
        className={buttonTheme}
        value="tan"
        onClick={() => clickHandler("tan()")}
      >
        tan
      </button>
      <button
        className={buttonTheme}
        value="("
        onClick={() => clickHandler("(")}
      >
        (
      </button>
      <button
        className={buttonTheme}
        value=")"
        onClick={() => clickHandler(")")}
      >
        )
      </button>
      <button
        className={buttonTheme}
        value=","
        onClick={() => clickHandler(",")}
      >
        ,
      </button>
    </div>
  );
}

export default Trig;
