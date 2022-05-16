import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useToggleTheme() {
  return useContext(ThemeUpdateContext);
}
export function ThemeContextComp({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prevMode) => !prevMode);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
