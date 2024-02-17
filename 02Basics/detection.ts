function detectType(val: number | string) {
  // return val.toLowerCase()  not allowed on union type
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  // val is number
  return val + 2;
}

function provideId(id: string | null) {
  // handle case if id is null
  if (!id) {
    console.log("Id doesn't exist");
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    // handles null values
    if (typeof strs === "object") {
      // handle if strs is an array of strings
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      // handle if strs is a single string
      console.log(strs);
    }
  }
}
const res1 = detectType(2);
// console.log(res1);
const res2 = provideId("AA124abch");
// console.log(res2);
printAll(["abvch", "uiuind", "qpoush"]);

// Type narrowing in interfaces
interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(acc: User | Admin) {
  if ("isAdmin" in acc) return acc.name;
}
const adminACC = isAdminAccount({
  name: "abhi",
  email: "a@a.com",
  isAdmin: true,
});
console.log("adminName", adminACC);

// Instance of
class Animal {
  move(): void {
    console.log("moving..");
  }
}
class Dog extends Animal {
  bark(): void {
    console.log("barking..");
  }
}

let animal = new Animal();
let dog = new Dog();

console.log(dog instanceof Animal); // returns true
console.log(animal instanceof Animal); // returns true
console.log(dog instanceof Dog); // returns true
console.log(animal instanceof Dog); // returns false

// another example of instance of
function logDateValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString());
  } else {
    console.log(x.toUpperCase());
  }
}
const date = new Date();
logDateValue(date); // output: 17 / 2 / 2024;
logDateValue("helloworld"); // HELLOWORLD;

// Type predicate
function isNum(val: any): val is number {
  return typeof val === "number";
}

function multiply(val: number | string, factor: number): number {
  if (isNum(val)) {
    return val * factor;
  } else {
    throw new Error("Value is not a number");
  }
}
console.log(multiply(2, 5)); // output: 10
// console.log(multiply("hi", 2)); // Error

export {};
