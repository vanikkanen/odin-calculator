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

    num1 = operate(+num1, +num2, operator)
    display.textContent = num1
    operator = null
    num2 = null
}

let display = document.querySelector(".calculator-display")

let numpadButtons = document.querySelectorAll(".calculator-numpad .numpad")
numpadButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if(!operator){
            num1 = +num1 ? num1 + btn.textContent : btn.textContent
            display.textContent = num1
        } 
        else {
            num2 = num2 ? num2 + btn.textContent : btn.textContent
            display.textContent = num2
        } 
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