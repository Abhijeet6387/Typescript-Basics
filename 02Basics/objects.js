"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object Declaration
var User = {
    name: "abhi",
    email: "abhi@gmail.com",
    isActive: true,
};
console.log("User", User);
// returning an object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var course = createCourse();
console.log(course);
// Passing object in function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({
    name: "abhi",
    isPaid: false,
    // If is try to pass age here it gives an error
    // age:23
});
// However if we pass newUser, it doesn't gives error - Bad Behaviour
var newUser = { name: "abhi", isPaid: false, age: 23 };
createUser(newUser);
function createPerson(person) {
    return {
        name: person.name,
        email: person.email,
        age: person.age,
    };
}
var newPerson = createPerson({ name: "abhi", email: "abc@abc.com", age: 23 });
console.log("Person", newPerson);
