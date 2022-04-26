import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeContextProvider = function ({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeContextConsumer = ThemeContext.Consumer;

export { ThemeContextProvider, ThemeContext };
