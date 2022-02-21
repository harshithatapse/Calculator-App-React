import React from "react";
import { useReducer } from "react";

const initialState = {
  displayValue: "",
  operator: null,
  firstOperand: 0,
  lastPressedKey: null,
  dotPressed: false,
};

const logic = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a * (b / 100),
};

export const CalcContext = React.createContext();

function CalcContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "number":
        let currentDisplayValue = state.displayValue;
        if (state.lastPressedKey === "operator") {
          currentDisplayValue = "";
        }
        return {
          ...state,
          displayValue: currentDisplayValue + action.payload,
          lastPressedKey: action.type,
        };

      case "operator":
        if (action.payload === "=") {
          if (state.operator === null) {
            return {
              ...state,
            };
          } else {
            const operation = logic[state.operator];
            const left = state.firstOperand;
            const right = parseFloat(state.displayValue);
            const result = operation(left, right);

            return {
              ...state,
              lastPressedKey: action.type,
              operator: null,
              firstOperand: result,
              displayValue: result,
            };
          }
        }

        if (action.payload === "." && state.dotPressed === false) {
          let currentDisplayValue = state.displayValue;
          return {
            ...state,
            displayValue: currentDisplayValue + action.payload,
            lastPressedKey: "number",
            dotPressed: true,
          };
        }

        if (action.payload === "." && state.dotPressed === true) {
          let currentDisplayValue = state.displayValue;
          return {
            ...state,
            displayValue: currentDisplayValue,
            lastPressedKey: "number",
          };
        }

        if (action.payload === "AC") {
          return {
            ...initialState,
          };
        } else {
          return {
            ...state,
            lastPressedKey: action.type,
            operator: action.payload,
            firstOperand: parseFloat(state.displayValue),
          };
        }
      default:
    }
  };

  const [currentState, dispatch] = useReducer(reducer, initialState);

  const handleClick = (name) => {
    if (!isNaN(name)) {
      dispatch({ type: "number", payload: name });
    } else {
      dispatch({ type: "operator", payload: name });
    }
  };

  return (
    <CalcContext.Provider value={{ currentState, handleClick }}>
      {children}
    </CalcContext.Provider>
  );
}

export default CalcContextProvider;
