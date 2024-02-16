"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create an array
var score = [];
var names = [];
// Function that can input boolean or numbers and can return boolean or number
function identityOne(val) {
    return val;
}
// NOT RECOMMENDED - Function that can input any datatype and return any
function identityTwo(val) {
    return val;
}
// Generic Function
function identityThree(val) {
    return val;
}
identityThree(true); // returns true
identityThree("Hello"); // returns Hello
identityThree(3); // returns 3
var pair1 = { first: "Hi", second: 3 };
var pair2 = { first: 3, second: true };
console.log(pair1, pair2);
// Generic function that inputs an array of any type like number, string etc.
function getSearchProducts(products) {
    return products[2];
}
// Generic arrow function
var getMoreSearchProducts = function (products) {
    return products[3];
};
var res1 = getSearchProducts(["a", "b", "c", "d"]);
console.log(res1); // returns "c"
var res2 = getMoreSearchProducts([1, 2, 3, 4, 5, 7, 8, 9]);
console.log(res2); // returns 4
// Using Type Parameters in Generic Constraints
function func(val1, val2) {
    return { val1: val1, val2: val2 };
}
var obj1 = func(2, "2");
console.log(obj1); // return {2, "2"}
// We can apply constraints in Type values using extends keyword
function anotherFunc(val1, val2) {
    return { val1: val1, val2: val2 };
}
// anotherFunc(3, "4");  is not allowed, second type should be a number
var obj2 = anotherFunc("3wr", 2);
console.log(obj2); // returns {"3wr", 2}
function funcDB(val1, val2) {
    return { val1: val1, val2: val2 };
}
var obj3 = funcDB("myDatabase", {
    connection: "http://localhost:3000",
    username: "abhijeet",
    password: "2897ebsjzhiu276",
});
console.log(obj3);
// Using Class Types in Generics
var Box = /** @class */ (function () {
    function Box(item) {
        this.item = item;
    }
    Box.prototype.getItem = function () {
        return this.item;
    };
    return Box;
}());
var BoxOfNumbers = new Box(10);
var BoxOfStrings = new Box("hello");
console.log(BoxOfNumbers.getItem()); // returns 10
console.log(BoxOfStrings.getItem()); // returns hello
