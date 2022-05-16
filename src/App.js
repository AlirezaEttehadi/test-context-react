import React from "react";
import SampleComp from "./SampleComp";
import { ThemeContextComp } from "./ThemeContext";

function App() {
  return (
    <ThemeContextComp>
      <SampleComp />
    </ThemeContextComp>
  );
}

export default App;
