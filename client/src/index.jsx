import React from "react";
import ReactDOM from "react-dom";
import { ThemeContextProvider } from "./context/theme";

import App from "./App";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.querySelector("#root")
);
