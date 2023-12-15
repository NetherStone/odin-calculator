const Addition = (a, b) => a + b; //Addition

const Subtraction = (a, b) => a - b; //Subtraction

const Multiplication = (a, b) => a * b; //Multiplication

const Division = (a, b) => a / b; //Division

function operate (firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return Addition(firstNumber, secondNumber)
    }
    if (operator === "-") {
        return Subtraction(firstNumber, secondNumber)
    }
    if (operator === "*") {
        return Multiplication(firstNumber, secondNumber)
    }
    if (operator === "/") {
        return Division(firstNumber, secondNumber)
    }
}

let firstNumber = 0; //Initialize variables
let secondNumber = 0;
let operator = "";
