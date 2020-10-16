import operate from "./operations";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {

  // "AC" pressed
  if (buttonName === "AC") {
    return {
      total: null,
    };
  }

  // Number pressed
  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.total === "0") {
      return {};
    }
    // If there is an operation, update total
    if (obj.operation) {
      if (obj.total) {
        return { total: obj.total + buttonName };
      }
      return { total: buttonName };
    }
    // If there is no operation, update total and clear the value
    if (obj.total) {
      const total = obj.total === "0" ? buttonName : obj.total + buttonName;
      return {
        total,
        previous: null,
      };
    }
    return {
      total: buttonName,
      previous: null,
    };
  }

  // "." pressed
  if (buttonName === ".") {
    if (obj.total) {
      // ignore a . if the total number already has one
      if (obj.total.includes(".")) {
        return {};
      }
      return { total: obj.total + "." };
    }
    return { total: "0." };
  }

  // "=" pressed
  if (buttonName === "=") {
    if (obj.total && obj.operation) {
      return {
        previous: null,
        total: operate(obj.previous, obj.total, obj.operation),
        operation: null,
      };
    } else {
      // '=' with no operation
      return {};
    }
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      previous: operate(obj.previous, obj.total, obj.operation) || "0",
      total: null,
      operation: buttonName
    };
  }

  // No operation yet, but the user typed one

  // Number not pressed, just save the operation
  if (!obj.total) {
    return { 
        previous: obj.total || "0",
        operation: buttonName 
    };
  }

  // Save the operation and shift 'total' into 'previous'
  return {
    previous: obj.total,
    total: null,
    operation: buttonName,
  };
}