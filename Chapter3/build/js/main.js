"use strict";
//LITTERAL TYPES
let myName;
let useName;
//functions
const sumNumbers = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello");
// logMessage(436)
logMessage(sumNumbers(12, 18));
let substract = function (a, b) {
    return a - b;
};
// interface mathFunction{
//     (a: number, b: number): number
// }
let multiply = function (a, b) {
    return a * b;
};
logMessage(multiply(4, 3));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameter value
const sumAll = (a = 12, b, c) => {
    return a + b + c;
};
logMessage(addAll(3, 3));
logMessage(sumAll(undefined, 2, 5));
//Rest paramters
