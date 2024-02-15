// Object Declaration
const User = {
  name: "abhi",
  email: "abhi@gmail.com",
  isActive: true,
};
console.log("User", User);

// returning an object
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}
let course = createCourse();
console.log("Course", course);

// Passing object in function
function createUser({ name: string, isPaid: boolean }): void {}

createUser({
  name: "abhi",
  isPaid: false,
  // If is try to pass age here it gives an error
  // age:23
});

// However if we pass newUser, it doesn't gives error - Bad Behaviour
let newUser = { name: "abhi", isPaid: false, age: 23 };
createUser(newUser);

// Type Aliases
type Person = {
  name: string;
  email: string;
  age: number;
};
// function inputs a type Person object and also return a type Person object
function createPerson(person: Person): Person {
  return {
    name: person.name,
    email: person.email,
    age: person.age,
  };
}
let newPerson = createPerson({ name: "abhi", email: "abc@abc.com", age: 23 });
console.log("Person", newPerson);
export {};
