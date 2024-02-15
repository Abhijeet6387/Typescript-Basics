"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Used when we need a specific order
// Define a tuple
var myTuple;
myTuple = ["hello", 10, true];
// Access elements of the tuple by their index
console.log(myTuple[0]); // Output: "hello"
// Update elements of the tuple
myTuple[0] = "world";
myTuple[1] = 20;
// since it is just an array, we can use methods like .push(), .pop()
// makes it a little weird to use
myTuple.push("Hello");
myTuple.pop();
// Destructuring a tuple
var str = myTuple[0], num = myTuple[1], bool = myTuple[2];
console.log(str); // Output: "world"
console.log(num); // Output: 20
console.log(bool); // Output: undefined
