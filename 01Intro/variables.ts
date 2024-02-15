let greetings: string = "Hello Abhi";
console.log(greetings);

// number
let userId = 228399;
// Type Inference - Typescript is smart to infer the type of userId even if we don't explictly tell it
userId.toString();
console.log(userId);

// boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);

// any
// Variable 'hero' implicitly has an 'any' type, but a better type may be inferred from usage.
let hero: string;
function getHero() {
  return "Thor";
}
hero = getHero();

export {};
