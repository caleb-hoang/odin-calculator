let num1 = NaN
let num2 = NaN
let func = NaN


// Attempt to execute an operation
function execute() {}

// Functions
function add(val1, val2) {
    if (isNaN(val1) || isNaN(val2)) {
        return "ERROR"
    }
    return val1 + val2
}

function subtract(val1, val2) {
    if (isNaN(val1) || isNaN(val2)) {
        return "ERROR"
    }
    return val1 - val2
}

function multiply(val1, val2) {
    if (isNaN(val1) || isNaN(val2)) {
        return "ERROR"
    }
    return val1 * val2
}

function divide(val1, val2) {
    if (isNaN(val1) || isNaN(val2)) {
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
}

// Create function buttons
function buildFunctionButtons() {
    
    const funcButtons = document.querySelector(".buttonsFunctions")
    buildFunctionButton('+', funcButtons)
    buildFunctionButton('-', funcButtons)
    buildFunctionButton('*', funcButtons)
    buildFunctionButton('/', funcButtons)
    buildFunctionButton('c', funcButtons)
    
}

function buildFunctionButton(func, parent) {
    const button = document.createElement('div')
    button.classList.add('numButton')
    button.textContent = func

    // Add interactivity
    button.addEventListener("click", () => {funcClick(func)})

    parent.appendChild(button)
}

// Function called when a function button is clicked
function funcClick(func) {
    console.log("Button " + func + " clicked!")
}

buildNumButtons()
buildFunctionButtons()