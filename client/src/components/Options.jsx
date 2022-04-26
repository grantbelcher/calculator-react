import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";

function Options() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const buttonText = theme === "light" ? "dark" : "light";
  return (
    <div className="options">
      <button className={`operation-button-${theme}`} onClick={toggleTheme}>
        {buttonText} theme
      </button>
    </div>
  );
}

export default Options;
