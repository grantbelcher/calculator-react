import React, { useState } from "react";
import Test from "./components/Test/Test";
import Trig from "./components/Trig/Trig";
import GridCenter from "./components/GridCenter";
import GridRight from "./components/GridRight";
import Options from "./components/Options";
import Equations from "./components/Equations";

const App = () => {
  const [prevEquations, setPrevEquations] = useState([]);
  return (
    <div className="container">
      <Equations prevEquations={prevEquations} />
      <div className="calculator-api">
        <Options />
        <div className="bottom-section">
          <Trig />
          <GridCenter />
          <GridRight />
        </div>
      </div>
    </div>
  );
};

export default App;
