function add() {
  const firstNumber = parseFloat(prompt('Enter your first number:'));
  const secondNumber = parseFloat(prompt('Enter your second number:'));
  const result = firstNumber + secondNumber;
  alert('The result is: ' + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt('Enter your first number:'));
  const secondNumber = parseFloat(prompt('Enter your second number:'));
  const result = firstNumber - secondNumber;
  alert('The result is: ' + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt('Enter your first number:'));
  const secondNumber = parseFloat(prompt('Enter your second number:'));
  const result = firstNumber * secondNumber;
  alert('The result is: ' + result);
}
function divide() {
  const firstNumber = parseFloat(prompt('Enter your first number:'));
  const secondNumber = parseFloat(prompt('Enter your second number:'));
  const result = firstNumber / secondNumber;
  alert('The result is: ' + result);
}

function simpleInterest() {
  const principleValue = parseFloat(prompt('Enter your principle amount ($):'));
  const interestRate = parseFloat(prompt('Enter your interest rate (%):'));
  const termYear = parseFloat(prompt('Enter your year term: '));
  const interest = (principleValue * interestRate * termYear) / 100;
  alert('The total loan is: ' + interest);
}

function compoundInterest() {
  const interestRate = parseFloat(prompt('Enter your interest rate (%):'));
  const principalAmount = parseFloat(prompt('Enter your principle amount:'));
  const timeYear = parseFloat(prompt('Enter your year amount:'));
  const compoundFrequency = 1;
  const interest = interestRate / 100;
  const accumulatedAmount =
    principalAmount *
    Math.pow(1 + interest / compoundFrequency, compoundFrequency * timeYear);
  const result = accumulatedAmount - principalAmount;
  alert('The result is: ' + result);
}
