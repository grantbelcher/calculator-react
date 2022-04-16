import React from "react";
import Test from "./components/Test/Test";
import Trig from "./components/Trig/Trig";
import GridCenter from "./components/GridCenter";

const App = () => (
  <div className="container">
    <div className="bottom-section">
      <Trig />
      <GridCenter />
    </div>
  </div>
);

export default App;
