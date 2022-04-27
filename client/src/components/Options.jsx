import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";

function Options({ clearEquations, clearAll }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeButtonText = theme === "light" ? "dark" : "light";
  const clearButtonText = clearAll ? "Clear All" : "Clear";
  return (
    <div className="options">
      <button className={`operation-button-${theme}`} onClick={toggleTheme}>
        {themeButtonText} theme
      </button>
      <button
        className={`operation-button-${theme}`}
        onClick={() => clearEquations(clearAll)}
      >
        {clearButtonText}
      </button>
    </div>
  );
}

export default Options;
