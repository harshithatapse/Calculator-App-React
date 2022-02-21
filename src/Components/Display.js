import React from "react";
import "./Display.css";
import { CalcContext } from "./Context";

function Display() {
  const KeypadData = React.useContext(CalcContext);
  return (
    <div className="DisplayCSS">
      <h1> {KeypadData.currentState.displayValue} </h1>
    </div>
  );
}
export default Display;
