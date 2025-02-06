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

let display = document.querySelector(".calculator-display")
let numpadButtons = document.querySelectorAll(".calculator-numpad .numpad")
numpadButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        display.textContent = display.textContent + btn.textContent
    })
})

