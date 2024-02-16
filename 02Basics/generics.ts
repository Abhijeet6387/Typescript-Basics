// create an array
const score: Array<number> = [];
const names: Array<string> = [];

// Function that can input boolean or numbers and can return boolean or number
function identityOne(val: boolean | number): boolean | number {
  return val;
}
// NOT RECOMMENDED - Function that can input any datatype and return any
function identityTwo(val: any): any {
  return val;
}
// Generic Function
function identityThree<T>(val: T): T {
  return val;
}
identityThree(true); // returns true
identityThree("Hello"); // returns Hello
identityThree(3); // returns 3

// Generic Interface
interface Pair<T, U> {
  first: T;
  second: U;
}

let pair1: Pair<string, number> = { first: "Hi", second: 3 };
let pair2: Pair<number, boolean> = { first: 3, second: true };
console.log(pair1, pair2);

// Generic function that inputs an array of any type like number, string etc.
function getSearchProducts<T>(products: T[]): T {
  return products[2];
}
// Generic arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[3];
};
const res1 = getSearchProducts(["a", "b", "c", "d"]);
console.log(res1); // returns "c"

const res2 = getMoreSearchProducts([1, 2, 3, 4, 5, 7, 8, 9]);
console.log(res2); // returns 4

// Using Type Parameters in Generic Constraints
function func<T, U>(val1: T, val2: U): object {
  return { val1, val2 };
}

let obj1 = func(2, "2");
console.log(obj1); // return {2, "2"}

// We can apply constraints in Type values using extends keyword
function anotherFunc<T, U extends number>(val1: T, val2: U): object {
  return { val1, val2 };
}

// anotherFunc(3, "4");  is not allowed, second type should be a number
let obj2 = anotherFunc("3wr", 2);
console.log(obj2); // returns {"3wr", 2}

// Real world example of extends in generics using Interfaces
interface Database {
  connection: string;
  username: string;
  password: string;
}

function funcDB<T, U extends Database>(val1: T, val2: U): object {
  return { val1, val2 };
}

let obj3 = funcDB("myDatabase", {
  connection: "http://localhost:3000",
  username: "abhijeet",
  password: "2897ebsjzhiu276",
});
console.log(obj3);

// Using Class Types in Generics
class Box<T> {
  constructor(private item: T) {}
  getItem(): T {
    return this.item;
  }
}

let BoxOfNumbers = new Box<number>(10);
let BoxOfStrings = new Box<string>("hello");
console.log(BoxOfNumbers.getItem()); // returns 10
console.log(BoxOfStrings.getItem()); // returns hello

export {};
