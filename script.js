function operate(a, b, op) {
    let operation = op;

    switch (operation) {
        case 'sum':
            return a + b;
            break;
        case 'sus':
            return a - b;
            break;
        case 'mult':
            return a * b;
            break;
        case 'div':
            return a / b;
            break;
    }
};

let display = document.getElementById('display');
let displayValue = 0;
let storedValue = 0;


let numbers = Array.from(document.getElementsByClassName('num'));

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        displayValue += e.target.innerHTML;
        display.textContent = displayValue;   
    })
})