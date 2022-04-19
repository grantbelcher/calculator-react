import React from "react";
import Test from "./components/Test/Test";
import Trig from "./components/Trig/Trig";
import GridCenter from "./components/GridCenter";
import GridRight from "./components/GridRight";
import Options from "./components/Options";
import Equations from "./components/Equations";

const App = () => (
  <div className="container">
    <Equations />
    <Options />
    <div className="bottom-section">
      <Trig />
      <GridCenter />
      <GridRight />
    </div>
  </div>
);

export default App;
