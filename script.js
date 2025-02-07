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
    num1 = !Number.isNaN(parseFloat(ans)) ? Math.round(ans + Number.EPSILON * 10000) / 10000 : ans
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


let display = document.querySelector(".calculator-display")

let numpadButtons = document.querySelectorAll(".calculator-numpad .numpad")
numpadButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let num = chooseCorrectNum()
        num = !Number.isNaN(parseFloat(num)) ? num + btn.textContent : btn.textContent
        updateCorrectNum(num)
        display.textContent = num
    })
})

let operatorButtons = document.querySelectorAll(".calculator-operators .operator")
operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!operator) operator = btn.textContent
        else {
            evaluate()
            operator = btn.textContent
        }
    })
})

let evalButton = document.querySelector(".eval-button")
evalButton.addEventListener("click", () => {
    evaluate()
})

let allClearButton = document.querySelector(".all-clear-button")
allClearButton.addEventListener("click", () => {
    display.textContent = ""
    num1 = null
    num2 = null
    operator = null
})

let clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click", () => {

    let erasedNum = display.textContent.slice(0, -1)

    let num = chooseCorrectNum()
    num = erasedNum
    updateCorrectNum(num)
    display.textContent = num
})

let decimalButton = document.querySelector(".decimal-button")
decimalButton.addEventListener("click", () => {

    if (display.textContent.includes(".")) return

    let num = chooseCorrectNum()
    num += "."
    updateCorrectNum(num)
    display.textContent = num
})