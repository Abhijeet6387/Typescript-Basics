// Used when we need a specific order
// Define a tuple
let myTuple: [string, number, boolean];
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
const [str, num, bool] = myTuple;
console.log(str); // Output: "world"
console.log(num); // Output: 20
console.log(bool); // Output: undefined

export {};
