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
            const button = document.createElement('div')
            button.classList.add('numButton')
            button.textContent = i * 3 + j
            buttonRow.appendChild(button)
        }
        buttonsNumbers.append(buttonRow)
    }
    const zeroRow = document.createElement('div')
    zeroRow.classList.add('numRow')
    const button = document.createElement('div')
    button.classList.add('numButton')
    button.textContent = 0
    zeroRow.appendChild(button)
    buttonsNumbers.appendChild(zeroRow)
}

// function called when a numButton is clicked
function numClick() {}

// Create function buttons
function buildFunctionButtons() {
    
    const funcButtons = document.querySelector(".buttonsFunctions")
    for (let i = 0; i < 5; i++) {
        const button = document.createElement('div')
        button.classList.add('funcButton')
        funcButtons.appendChild(button)
    }
}

// Function called when a function button is clicked
function funcClick(value) {}

// Function called when the = button is clicked
function equalsClick() {}

// Function called when the c button is clicked
function clearClick() {

}

buildNumButtons()
buildFunctionButtons()