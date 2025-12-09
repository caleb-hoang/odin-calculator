let num1 = null
let num2 = null
let func = null
const display = document.querySelector(".displayBox")

// Attempt to execute an operation
function execute() {}

// Functions
function add(val1, val2) {
    if (val1 == null || val2 == null) {
        return "ERROR"
    }
    return val1 + val2
}

function subtract(val1, val2) {
    if (val1 == null || val2 == null) {
        return "ERROR"
    }
    return val1 - val2
}

function multiply(val1, val2) {
    if (val1 == null || val2 == null) {
        return "ERROR"
    }
    return val1 * val2
}

function divide(val1, val2) {
    if (val1 == null || val2 == null) {
        return "ERROR"
    }

    if (val2 == 0) { // edge case for dividing by zero
        return "Don't even think about it."
    }
    return val1 / val2
}


// create number buttons
function buildNumButtons() {
    const buttonsNumbers = document.querySelector(".buttonsNumbers")
    for (let i = 0; i < 3; i ++) {
        const buttonRow = document.createElement('div')
        buttonRow.classList.add('numRow')
        for (let j = 1; j <= 3; j++) {
            buildNumButton(i * 3 + j, buttonRow)
        }
        buttonsNumbers.appendChild(buttonRow)
    }
    const zeroRow = document.createElement('div')
    zeroRow.classList.add('numRow')
    buildNumButton(0, zeroRow)
    buttonsNumbers.appendChild(zeroRow)
}

// helper function called by buildNumButtons to build and append a single button.
function buildNumButton(value, parent) {
    const button = document.createElement('div')
    button.classList.add('numButton')
    button.textContent = value

    // Add interactivity
    button.addEventListener("click", () => {numClick(value)})

    parent.appendChild(button)
}

// function called when a numButton is clicked
function numClick(value) {
    console.log("Button " + value + "clicked!")

    if (num1 == null) { // num1 is null; input is appended to num1
        num1 = "" + value
    } else {
        if (func == null) { // function button has not been pressed; input is appended to num1
            num1 = ("" + num1) + value
        } else { // function button has been pressed; input is appended to num2
            if(num2 == null) { // num2 is null; input is appended to num2
                num2 = "" + value
            } else { // num2 is not null; input is appended to num2
                num2 = ("" + num2) + value
            }
        }
    }

    updateScreen()
}

// Create function buttons
function buildFunctionButtons() {
    
    const funcButtons = document.querySelector(".buttonsFunctions")
    buildFunctionButton('c', funcButtons)
    buildFunctionButton('+', funcButtons)
    buildFunctionButton('-', funcButtons)
    buildFunctionButton('*', funcButtons)
    buildFunctionButton('/', funcButtons)
    buildFunctionButton('=', funcButtons)
    
}

function buildFunctionButton(funct, parent) {
    const button = document.createElement('div')
    button.classList.add('funcButton')
    button.textContent = funct

    // Add interactivity
    button.addEventListener("click", () => {funcClick(funct)})
    if (funct != '=' && funct != 'c') {
        button.addEventListener("click", () => {button.style.backgroundColor = 'steelblue'})
    }
    parent.appendChild(button)
}

// Function called when a function button is clicked
function funcClick(funct) {
    console.log("Button " + funct + " clicked!")


}

function updateScreen() {
    if(func == null) {
        display.textContent = num1
    } else {
        display.textContent = num2
    }
}

buildNumButtons()
buildFunctionButtons()