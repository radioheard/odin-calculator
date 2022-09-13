function operate(a, b, op) {

    let operation = op;
    switch (operation) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case 'x':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }

};

let display = document.getElementById('display');
let storage = document.getElementById('console');
let displayValue = 0;
let storedValue = 0;


let numbers = Array.from(document.getElementsByClassName('num'));

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        displayValue += e.target.innerHTML;
        display.textContent = parseInt(displayValue);   
    })
})

let operators = Array.from(document.getElementsByClassName('op'));

operators.forEach((op) => {
    op.addEventListener('click', (e) => {
        storedValue = parseInt(displayValue);
        displayValue = 0;
        display.textContent = displayValue;
        storage.textContent = storedValue;
    })
})

let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    displayValue = 0;
    storedValue = 0;
    display.textContent = 0;
    storage.textContent = ' ';
})

let back = document.getElementById('back');
back.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = parseInt(displayValue);
})

let equal = document.getElementById('eq');
equal.addEventListener('click', () => {
    
})