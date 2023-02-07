function add(num1, num2) {
    return num1 + num2;
}
add(1,80);

function subtract(num1, num2) {
    return num1 - num2;
}
subtract(60,40);

function multiply(num1, num2) {
    return num1 * num2;
}
multiply(2,3.4);

function divide(num1, num2) {
    return num1/num2;
}
divide(5.0,2.5);

function increment(n) {
    return n += 1;
}
increment(6);

function decrement(n) {
    return n -= 1;
}
decrement(72);

function makeInt(n) {
    return parseInt(n,10);
}
makeInt('243.292');

function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal(`2343.4228`);