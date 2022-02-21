import React from "react";
import ButtonComponent from "./ButtonComponent";

function KeyPad() {
  return (
    <div style={{ height: "100%", width: "100%", display: "flex" }}>
      <table>
        <tr>
          <ButtonComponent name="AC" />
          <ButtonComponent name="+/-" />
          <ButtonComponent name="%" />
          <ButtonComponent name="/" />
        </tr>
        <tr>
          <ButtonComponent name="7" />
          <ButtonComponent name="8" />
          <ButtonComponent name="9" />
          <ButtonComponent name="*" />
        </tr>
        <tr>
          <ButtonComponent name="4" />
          <ButtonComponent name="5" />
          <ButtonComponent name="6" />
          <ButtonComponent name="-" />
        </tr>
        <tr>
          <ButtonComponent name="1" />
          <ButtonComponent name="2" />
          <ButtonComponent name="3" />
          <ButtonComponent name="+" />
        </tr>
        <tr>
          <ButtonComponent name="0" colSpan={2} />
          <ButtonComponent name="." />
          <ButtonComponent name="=" />
        </tr>
      </table>
    </div>
  );
}
export default KeyPad;
