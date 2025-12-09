let num1 = null
let num2 = null
let func = null
const display = document.querySelector(".displayBox")

// Attempt to execute an operation
function execute() {}

// Functions
function add() {
    if (num1 == null || num2 == null) {
        return "ERROR"
    }
    num1 = parseFloat(num1) + parseFloat(num2)
    return num1
}

function subtract() {
    if (num1 == null || num2 == null) {
        return "ERROR"
    }
    num1 = parseFloat(num1) - parseFloat(num2)
    return
}

function multiply() {
    if (num1 == null || num2 == null) {
        return "ERROR"
    }
    num1 = num1 * num2
    return truncateDecimal(num1*num2)
}

function divide() {
    if (num1 == null || num2 == null) {
        return "ERROR"
    }

    if (num2 == 0) { // edge case for dividing by zero
        display.textContent = "Just don't."
        num1 = null
        num2 = null
        func = null
        updateButtons()
        return null
    }
    return truncateDecimal(num1 / num2)
}

function truncateDecimal(value) {
    value *= 100
    value = Math.floor(value)
    return value / 100
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
    button.id = funct
    // Add interactivity
    button.addEventListener("click", () => {funcClick(funct)})
    parent.appendChild(button)
}

// Function called when a function button is clicked
function funcClick(funct) {
    console.log("Button " + funct + " clicked!")

    if (funct == 'c') {
        num1 = null
        num2 = null
        func = null
        updateScreen()
        updateButtons()
        return
    }

    if (funct == '=') {
        evaluate()
        updateButtons()
        return
    }

    if (num1 == null) { // no num1; don't do anything.
        // do nothing
        return
    } else if (num2 == null) { // no num2; set func and wait for num2
        func = funct
        console.log("new function: " + func)
        updateButtons(func)
    } else { // num1 and num2; evaluate, then set new func if error is not returned.
        let calc = evaluate()

        if (calc != null) { // only set new func if the previous operation was valid
            func = funct
            console.log("new function: " + func)
        }
        updateButtons()
    }
}

function updateScreen(isEval) { // update the display.
    if(func == null) {
        display.textContent = num1
    } else {
        display.textContent = num2
    }

    if (isEval) {
        display.textContent = num1
    }
}

function updateButtons() {
    const funcButts = document.querySelectorAll('.funcButton')
    funcButts.forEach(butt =>{
        if (butt.textContent == func) {
            butt.style.backgroundColor = 'steelblue'
        } else {
            butt.style.backgroundColor = 'lightseagreen'
        }
    })
}

function evaluate() {
    let result = null
    if (func == '+') {result = add()}
    if (func == '-') {result = subtract()}
    if (func == '*') {result = multiply()}
    if (func == '/') {result = divide()} 

    console.log("Result: " + result)
    if (result == null) {
        return null
    } else {
        num1 = result
        updateScreen(true)
        return result
    }
}



buildNumButtons()
buildFunctionButtons()