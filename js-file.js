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

function duplicateCheck(display, targetToCheck) { //Checker for decimals and +/-
    let dupeCount = 0;

    for (let i = 0; i < display.length; i++) {
        let char = display[i];
        if (char === targetToCheck) {
            dupeCount++;
            if (dupeCount >= 1) {
                return true;
            }
        }
    }

    return false;
}

function digitsOneToNine(display) { //Check for digits one to nine
    const digitsRegex = /[1-9]/;
    return digitsRegex.test(display);
}

let firstNumber = 0; //Initialize variables
let secondNumber = 0;
let operator = "";

const numberButtons = document.querySelectorAll(".numbers");
const displayContentsDiv = document.getElementById("contents");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("clearDisplay");
const plusAndMinusButton = document.getElementById("plusAndMinus");

numberButtons.forEach((button) => { //Display to have numbers
    button.addEventListener("click", () => {
        if (displayContentsDiv.textContent.length === 9) {
            displayContentsDiv.textContent = displayContentsDiv.textContent;
        } else if (displayContentsDiv.textContent === "0") { 
            displayContentsDiv.textContent = button.textContent;
        } else {
            displayContentsDiv.textContent += button.textContent;  
        }
    });
});

decimalButton.addEventListener ("click", () => { //Display to have decimal
    if (displayContentsDiv.textContent.length === 9) {
        displayContentsDiv.textContent = displayContentsDiv.textContent;
    } else if (displayContentsDiv.textContent === "0") {
        displayContentsDiv.textContent += decimalButton.textContent; 
    } else if (duplicateCheck(displayContentsDiv.textContent, ".")) {
        displayContentsDiv.textContent = displayContentsDiv.textContent;
    } else {
        displayContentsDiv.textContent += decimalButton.textContent;  
    }
});

clearButton.addEventListener ("click", () => { //Clear button
    displayContentsDiv.textContent = 0;
});

plusAndMinusButton.addEventListener ("click", () => { //Plus and minus button
    if (displayContentsDiv.textContent.length === 9) {
        displayContentsDiv.textContent = displayContentsDiv.textContent;
    } else if (displayContentsDiv.textContent === "0") { 
        displayContentsDiv.textContent = displayContentsDiv.textContent;
    } else if (duplicateCheck(displayContentsDiv.textContent, "-")) {
        displayContentsDiv.textContent = displayContentsDiv.textContent.replace("-", "");
    } else if (digitsOneToNine(displayContentsDiv.textContent)) {
        displayContentsDiv.textContent = "-" + displayContentsDiv.textContent;
    } 
});
