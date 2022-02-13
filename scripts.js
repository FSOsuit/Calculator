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
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2); 
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

const operatorArray = [];
const numberArray = [];

let operatorCount = 0;
let operatorSign = ""; //store clicke operator sign
let number1 = 0; // stores 1st number
let number2 = 0; // stores 2nd number
let clicked = ""; // stores value of clicked num button
let display = document.querySelector('.display');

function populateDisplay () {
  if (display.textContent.length < 1) {
    display.textContent = clicked;
  } else {
    display.textContent += clicked;
  }
}


//adds event listener to each num button
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    clicked = number.textContent; //stores clicked value
    populateDisplay();
  });
});

//adds event listener to operator buttons, stores 1st number, resets display, saves clicked operator in variable
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    operatorSign = operator.textContent;
    number1 = display.textContent;
    display.textContent = "";
  });
});

const equal = document.querySelector('.equals');
equal.addEventListener('click', () => {
  number2 = display.textContent;
  display.textContent = operate(operatorSign, Number(number1), Number(number2));
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  number1 = "";
  number2 = "";
  display.textContent = "";
});

