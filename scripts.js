//adding
function add(a, b) {
  return a + b;
}

//subtraction
function subtract(a, b) {
  return a - b;
}

//multiplication
function multiply(a, b) {
  return a * b;
}

//division
function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2 ) {
  if (operator === "+") {
    console.log(add(num1, num2));
  } else if (operator === "-") {
    console.log(subtract(num1, num2)); 
  } else if (operator === "*") {
    console.log(multiply(num1, num2));
  } else if (operator === "/") {
    console.log(divide(num1, num2));
  }
}

operate("*",1,2);