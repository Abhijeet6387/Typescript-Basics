"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser1 = {
    id: 1,
    name: "abhijeet",
    email: "a@a.com",
    age: 20, // number
};
var newUser2 = {
    id: "2",
    name: "ritik",
    email: "b@b.com",
    age: "23", // string
};
console.log("U1", newUser1);
console.log("U2", newUser2);
// function takes an id as input that can be a string or number
function updateUser(id) {
    // for manipulating id, we need to check it's type explicitly
    if (typeof id === "number")
        id = id + 1;
    if (typeof id === "string")
        id.toLowerCase();
    console.log("User ID is ".concat(id));
}
updateUser(1);
updateUser("2");
// arrays
var myArr1 = [1, 2, 3, 4]; // array of numbers
var myArr2 = ["1", "2", "3", "4"]; // array of strings
var myArr3 = [1, "2", 3, "4", false]; // array of union of string, number & boolean
console.log(myArr1, myArr2, myArr3);
