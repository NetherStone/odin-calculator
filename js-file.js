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

const numberButtons = document.querySelectorAll(".numbers");
const displayContentsDiv = document.getElementById("contents");
const decimalButton = document.getElementById("decimal")

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

decimalButton.addEventListener ("click", () => {
    if (displayContentsDiv.textContent.length === 9) {
        displayContentsDiv.textContent = displayContentsDiv.textContent;
    } else if (displayContentsDiv.textContent === "0") {
        displayContentsDiv.textContent += decimalButton.textContent; 
    } else {
        displayContentsDiv.textContent += decimalButton.textContent;  
    }
});
