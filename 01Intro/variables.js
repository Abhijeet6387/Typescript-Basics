"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Abhi";
console.log(greetings);
// number
var userId = 228399;
// Type Inference - Typescript is smart to infer the type of userId even if we don't explictly tell it
userId.toString();
console.log(userId);
// boolean
var isLoggedIn = false;
console.log(isLoggedIn);
// any
// Variable 'hero' implicitly has an 'any' type, but a better type may be inferred from usage.
var hero;
function getHero() {
    return "Thor";
}
hero = getHero();
