function addTwo(num: number) {
  return num + 2;
}
// addTwo("2") -> Error
addTwo(3);

function getUpper(val: string) {
  return val.toUpperCase();
}
// getUpper(3) -> Error
getUpper("Abhijeet");

// Using Arrow Functions
let loginUser = (
  name: string,
  email: string,
  // To give a default value
  isVerified: boolean = false
) => {
  console.log(name, email, isVerified);
};

// No errors, isVerified would have default value "false"
loginUser("Abhi", "a@a.com");

// return type for a function
function square(num: number): number {
  return num * num;
  //   return "4";
}
let res = square(2);
console.log(res);

// void
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// never - some functions never return a value
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
