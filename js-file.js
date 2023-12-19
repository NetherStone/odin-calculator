const Addition = (a, b) => a + b; //Addition

const Subtraction = (a, b) => a - b; //Subtraction

const Multiplication = (a, b) => a * b; //Multiplication

const Division = (a, b) => a / b; //Division

function operate (firstNumber, secondNumber, operator) { //Call the operator functions with numbers
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

let firstNumber = null; //Initialize variables
let secondNumber = null;
let operator = [];
let displayRefresh = false;
// let firstNumberCheck = false;
// let secondNumberCheck = false;
let shadedButton = null;
let result = null;

const numberButtons = document.querySelectorAll(".numbers");
const displayContentsDiv = document.getElementById("contents");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("clearDisplay");
const plusAndMinusButton = document.getElementById("plusAndMinus");
const operatorButton = document.querySelectorAll(".operator");

numberButtons.forEach((button) => { //Display to have numbers
    button.addEventListener("click", () => {
        // if (operator.length === 1 && secondNumberCheck === true || firstNumberCheck === true) { //flag checking
        //     displayContentsDiv.textContent = "";
        //     secondNumberCheck = false;
        // }

        if (displayRefresh === true) {
            displayContentsDiv.textContent = "";
            displayRefresh = false;
        }

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

operatorButton.forEach((button) => { //Operator buttons
    button.addEventListener("click", () => {
        if (shadedButton !== null){
            shadedButton.classList.remove("active");
        }

        shadedButton = button;
        shadedButton.classList.add("active");

        operator.push(button.textContent);

        if (operator.includes("=") && operator.length === 1) { //If user repeatedly presses equals
            operator = [];
            shadedButton.classList.remove("active");
            shadedButton = null;
        } else if (firstNumber === null) {
            firstNumber = parseFloat(displayContentsDiv.textContent);
            displayRefresh = true;
        }

        //if (secondNumberCheck === false && firstNumberCheck === false){
            //firstNumber = parseFloat(displayContentsDiv.textContent);  
            //secondNumberCheck = true;
            //firstNumberCheck = true;
        //}

        // if (operator.length === 2){
        //     secondNumber = parseFloat(displayContentsDiv.textContent);
        //     operator = operator.filter(element => element !== "=");
        //     secondNumberCheck = true;
        //     result = operate(firstNumber, secondNumber, operator[0]);
        //     firstNumber = result;
        //     if (operator.length === 2) {
        //         operator = operator.shift();
        //     } else {
        //         operator = [];
        //     }
        //     secondNumber = 0;
        //     result = result.toString();
        //     displayContentsDiv.textContent = result;
        // }

        // if (result !== null && operator.length === 1){ //Continuous operations
        //     secondNumber = parseFloat(displayContentsDiv.textContent);
        //     result = operate(firstNumber, secondNumber, operator[0]);
        //     firstNumber = result;
        //     operator = [];
        //     secondNumber = 0;
        //     result = result.toString();
        //     displayContentsDiv.textContent = result;
       // }
    });
});
