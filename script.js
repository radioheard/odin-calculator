let displayValue = 0;
let storedValue = 0;
let operation = null;
function showImage() {
    var rock = document.getElementById('rock');
    rock.style.visibility = 'visible';
    setTimeout(() => {
        rock.classList.add("hidden");
    }, 500);
    setTimeout(() => {
        rock.classList.remove("hidden");
        rock.style.visibility = 'hidden';
    }, 5000);
}
function operate(a, b) {
if (a === 0 && b === 0 && operation === '/') {
    display.textContent = 'Br0';
    storage.textContent = 'Nah';
    showImage();
    
} else {
    switch (operation) {
        case '+':
            displayValue = a + b;
            break;
        case '-':
            displayValue = a - b;
            break;
        case 'x':
            displayValue = a * b;
            break;
        case '/':
            displayValue = a / b;
            break;
    }
    display.textContent = displayValue;
    storage.textContent = `${a} ${operation} ${b}`;
    storedValue = displayValue;
}
};

let display = document.getElementById('display');
let storage = document.getElementById('console');



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
        if (operation == null) {
            storedValue = parseInt(displayValue);
            displayValue = 0;
            display.textContent = displayValue;
            storage.textContent = storedValue;
            operation = e.target.innerHTML;
        } else {
            
            let disp = parseInt(displayValue);
            operate(storedValue, disp);
            operation = e.target.innerHTML;
            displayValue = 0;
        }
    })
})

let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    displayValue = 0;
    storedValue = 0;
    operation = null;
    display.textContent = 0;
    storage.textContent = ' ';
})

let back = document.getElementById('back');
back.addEventListener('click', () => {
    let str = displayValue.toString();
    str = str.slice(0, -1);
    displayValue = parseInt(str)
    display.textContent = displayValue;
})

let equal = document.getElementById('eq');
equal.addEventListener('click', () => {
    let disp = parseInt(displayValue);
    operate(storedValue, disp);
    displayValue = 0;
    storedValue = 0;
    storage.textContent = ' ';
    operation = null;
});