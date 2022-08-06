// *add* adds two numbers and displays the result
function add(a, b) {
    return a + b;
}

// *subtract* subtracts two numbers and displays the result
function subtract(a, b) {
    return a - b;
}

// *multiply* multiplies two numbers and displays the result
function multiply(a, b) {
    return a * b;
}

// *divide* divides two numbers and displays the result
function divide(a, b) {
    return a / b;
}

// *increment* adds 1 to the current number and displays the result
function increment(n) {
    return ++n;
}

// *decrement* subtracts 1 to the current number and displays the result
function decrement(n) {
    return --n;
}

// parses n as an integer and returns the passed integer, it assumes a base of 10, and it returns NaN as inappropriate
function makeInt(n) {
    return parseInt(n, 10);
}

//parses n a floating point number and returns the passed number, and it returns NaN as inappropriate
function preserveDecimal(n) {
    return parseFloat(n);
}