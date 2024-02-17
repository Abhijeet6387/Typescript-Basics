"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    // return val.toLowerCase()  not allowed on union type
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    // val is number
    return val + 2;
}
function provideId(id) {
    // handle case if id is null
    if (!id) {
        console.log("Id doesn't exist");
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        // handles null values
        if (typeof strs === "object") {
            // handle if strs is an array of strings
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            // handle if strs is a single string
            console.log(strs);
        }
    }
}
var res1 = detectType(2);
// console.log(res1);
var res2 = provideId("AA124abch");
// console.log(res2);
printAll(["abvch", "uiuind", "qpoush"]);
function isAdminAccount(acc) {
    if ("isAdmin" in acc)
        return acc.name;
}
var adminACC = isAdminAccount({
    name: "abhi",
    email: "a@a.com",
    isAdmin: true,
});
console.log("adminName", adminACC);
// Instance of
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("moving..");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("barking..");
    };
    return Dog;
}(Animal));
var animal = new Animal();
var dog = new Dog();
console.log(dog instanceof Animal); // returns true
console.log(animal instanceof Animal); // returns true
console.log(dog instanceof Dog); // returns true
console.log(animal instanceof Dog); // returns false
// another example of instance of
function logDateValue(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleDateString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
var date = new Date();
logDateValue(date); // output: 17 / 2 / 2024;
logDateValue("helloworld"); // HELLOWORLD;
// Type predicate
function isNum(val) {
    return typeof val === "number";
}
function multiply(val, factor) {
    if (isNum(val)) {
        return val * factor;
    }
    else {
        throw new Error("Value is not a number");
    }
}
console.log(multiply(2, 5)); // output: 10
// console.log(multiply("hi", 2)); // Error
