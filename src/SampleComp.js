import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function SampleComp() {
  const darkTheme = useContext(ThemeContext);
  return (
    <div style={{ background: darkTheme ? "black" : "white" }}>
      sdfsdfsdfsdfsdfsf
    </div>
  );
}
