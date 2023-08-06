const { log } = console;
const screenDisplay = document.querySelector(".display__operation");
const screenEqual = document.querySelector(".display__equality");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculations;

const calculate = (button) => {
    const value = button.textContent;
    if(value === "AC"){
        screenEqual.textContent = "";
        screenDisplay.textContent = ".";
        calculation = [];
    } else if (value === "=") {
        screenEqual.textContent = eval(accumulativeCalculations)
        screenEqual.textContent.substring(0,4)
    } else {
        calculation.push(value);
        accumulativeCalculations = calculation.join("");
        screenDisplay.textContent = accumulativeCalculations;
        
    }
    
};

buttons.forEach((button) =>
    button.addEventListener("click", () => calculate(button))
);
