"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo("2") -> Error
addTwo(3);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(3) -> Error
getUpper("Abhijeet");
// Using Arrow Functions
var loginUser = function (name, email, 
// To give a default value
isVerified) {
    if (isVerified === void 0) { isVerified = false; }
    console.log(name, email, isVerified);
};
// No errors, isVerified would have default value "false"
loginUser("Abhi", "a@a.com");
// return type for a function
function square(num) {
    return num * num;
    //   return "4";
}
var res = square(2);
console.log(res);
// void
function consoleError(errmsg) {
    console.log(errmsg);
}
// never - some functions never return a value
function handleError(errmsg) {
    throw new Error(errmsg);
}
