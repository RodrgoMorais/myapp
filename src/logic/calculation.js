import operate from "./operations";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {

  // "AC" pressed
  if (buttonName === "AC") {
    return {
      total: null,
    };
  }

  // Some "MC" pressed
  if (buttonName.slice(0,2) === "MC") {
    if (buttonName.slice(2,3) === "1"){
      return {
        saved1: obj.saved2,
        saved2: obj.saved3,
        saved3: obj.saved4,
        saved4: null,
      }
    }
    if (buttonName.slice(2,3) === "2"){
      return {
        saved2: obj.saved3,
        saved3: obj.saved4,
        saved4: null,
      }
    }
    if (buttonName.slice(2,3) === "3"){
      return {
        saved3: obj.saved4,
        saved4: null,
      }
    }
    if (buttonName.slice(2,3) === "4"){
      return {
        saved4: null,
      }
    }
    else {
      return {
        saved1: null,
        saved2: null,
        saved3: null,
        saved4: null,
      };
    }
  }

  // Some "MR" pressed
  if (buttonName.slice(0,2) === "MR") {
    if (buttonName.slice(2,3) === "1"){
      return {
        total: obj.saved1,
      }
    }
    if (buttonName.slice(2,3) === "2"){
      return {
        total: obj.saved2,
      }
    }
    if (buttonName.slice(2,3) === "3"){
      return {
        total: obj.saved3,
      }
    }
    if (buttonName.slice(2,3) === "4"){
      return {
        total: obj.saved4,
      }
    }
    else {
      return {
        total: obj.saved1,
      };
    }
  }

  if (buttonName === "M+") {
    return {
      total: operate(obj.saved1, obj.total, "+"),
    };
  }

  if (buttonName === "MS") {
    return {
      saved1: obj.total,
      saved2: obj.saved1,
      saved3: obj.saved2,
      saved4: obj.saved3,
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

  // Number not pressed, just save the operation
  if (!obj.total) {
    return { 
        previous: obj.total || "0",
        operation: buttonName 
    };
  }

  return {
    previous: obj.total,
    total: null,
    operation: buttonName,
  };
}