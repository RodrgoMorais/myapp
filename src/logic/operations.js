export default function operate(numberOne, numberTwo, operation) {
  const one = (numberOne || "0");
  const two = (numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); 
  if (operation === "+") {
    return (parseFloat(one) + parseFloat(two)).toString();
  }
  if (operation === "-") {
    return (parseFloat(one) - parseFloat(two)).toString();
  }
  if (operation === "x") {
    return (parseFloat(one) * parseFloat(two)).toString();
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return (parseFloat(one) / parseFloat(two)).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}