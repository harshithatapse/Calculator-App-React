import React from "react";
import { Button } from "@material-ui/core";
import { CalcContext } from "./Context";

function ButtonComponent({ colSpan = 1, name }) {
  const KeypadData = React.useContext(CalcContext);
  return (
    <td colSpan={colSpan}>
      <Button
        variant="outlined"
        size="large"
        style={{ width: "100%" }}
        onClick={() => KeypadData.handleClick(name)}
      >
        {name}
      </Button>
    </td>
  );
}
export default ButtonComponent;
