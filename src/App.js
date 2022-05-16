import { createContext, useState } from "react";
import "./App.css";
import SampleComp from "./SampleComp";

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prevMode) => !prevMode);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={() => toggleTheme()}>toggleTheme</button>
      <SampleComp />
    </ThemeContext.Provider>
  );
}

export default App;
