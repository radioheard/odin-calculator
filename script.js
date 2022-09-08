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
}