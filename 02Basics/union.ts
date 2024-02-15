type User = {
  id: number | string;
  name: string;
  email: string;
  age: number | string; // age can be a number or a string
};

let newUser1: User = {
  id: 1,
  name: "abhijeet",
  email: "a@a.com",
  age: 20, // number
};

let newUser2: User = {
  id: "2",
  name: "ritik",
  email: "b@b.com",
  age: "23", // string
};

console.log("U1", newUser1);
console.log("U2", newUser2);

// function takes an id as input that can be a string or number
function updateUser(id: string | number) {
  // for manipulating id, we need to check it's type explicitly
  if (typeof id === "number") id = id + 1;
  if (typeof id === "string") id.toLowerCase();
  console.log(`User ID is ${id}`);
}

updateUser(1);
updateUser("2");

// arrays
const myArr1: number[] = [1, 2, 3, 4]; // array of numbers
const myArr2: string[] = ["1", "2", "3", "4"]; // array of strings
const myArr3: (number | string | boolean)[] = [1, "2", 3, "4", false]; // array of union of string, number & boolean
console.log(myArr1, myArr2, myArr3);

// can be used to restrict values
let gender: "male" | "female";
gender = "male";
// gender = "xyzz", not applicable

export {};
