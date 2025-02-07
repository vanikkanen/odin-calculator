function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1*num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "No dividing by zero, please"
    }
    return num1/num2
}

let num1
let num2
let operator

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)
        default:
            return "No support for that operator. Try one of these + - * /"
        }
}

function evaluate() {
    if (!num1 || !num2) return

    let ans = operate(+num1, +num2, operator)
    num1 = !Number.isNaN(parseFloat(ans)) ? Math.round((ans + Number.EPSILON) * 10000) / 10000 : ans
    display.textContent = num1
    operator = null
    num2 = null
}

function chooseCorrectNum() {
    return !operator ? num1 : num2
}

function updateCorrectNum(value) {
    if (!operator) {
        num1 = value;
    } else {
        num2 = value;
    }
}

function addNumberToCalculator(numString) {
    let num = chooseCorrectNum()
    num = !Number.isNaN(parseFloat(num)) ? num + numString : numString
    updateCorrectNum(num)
    display.textContent = num
}

function addOperatorToCalculator(operatorString) {
    if (!operator) operator = operatorString
    else {
        evaluate()
        operator = operatorString
    }
}

function clearAllFromCalculator() {
    display.textContent = ""
    num1 = null
    num2 = null
    operator = null
}

function clearLastFromCalculator() {
    let erasedNum = display.textContent.slice(0, -1)
    let num = chooseCorrectNum()
    num = erasedNum
    updateCorrectNum(num)
    display.textContent = num
}

function addDecimaltoCalculator() {
    if (display.textContent.includes(".")) return
    let num = chooseCorrectNum()
    num += "."
    updateCorrectNum(num)
    display.textContent = num
}

let display = document.querySelector(".calculator-display")

let numpadButtons = document.querySelectorAll(".calculator-numpad .numpad")
numpadButtons.forEach(btn => {
    btn.addEventListener("click", () => addNumberToCalculator(btn.textContent))
})

let operatorButtons = document.querySelectorAll(".calculator-operators .operator")
operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => addOperatorToCalculator(btn.textContent))
})

let evalButton = document.querySelector(".eval-button")
evalButton.addEventListener("click", () => evaluate())

let allClearButton = document.querySelector(".all-clear-button")
allClearButton.addEventListener("click", () => clearAllFromCalculator())

let clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click", () => clearLastFromCalculator())

let decimalButton = document.querySelector(".decimal-button")
decimalButton.addEventListener("click", () => addDecimaltoCalculator())


