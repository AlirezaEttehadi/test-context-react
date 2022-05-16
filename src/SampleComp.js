import React from "react";
import { useTheme, useToggleTheme } from "./ThemeContext";

export default function SampleComp() {
  const darkTheme = useTheme();
  const darkThemeToggle = useToggleTheme();
  return (
    <>
      <button onClick={() => darkThemeToggle()}>toggleTheme</button>
      <div
        style={{
          background: darkTheme ? "black" : "white",
          color: darkTheme ? "white" : "black",
        }}
      >
        sdfsdfsdfsdfsdfsf
      </div>
    </>
  );
}
