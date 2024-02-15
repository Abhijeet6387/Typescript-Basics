interface User {
  readonly dbId: string;
  name: string;
  email: string;
  age?: number;
  //   startTrail: () => string;  syntax 1 for methods - returns a string
  startTrail(): string; // syntax 2 for method - returns a string
  getCoupon(name: string, value: number): number; // returns a number, input name and value
}

// we can add more values to interface by reopening
interface User {
  googleAuthID: string;
}

// Inheritance in interfaces using extends
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const newUser: User = {
  dbId: "10291",
  name: "abhi",
  email: "a@a.com",
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "abhi2024", off: 10) => {
    return 10;
  },
  googleAuthID: "googleauthid",
};

const newAdmin: Admin = {
  dbId: "10791",
  name: "hitesh",
  email: "hc@a.com",
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "hc2024", off: 10) => {
    return 10;
  },
  googleAuthID: "googleauthid",
  role: "admin",
};

console.log(newUser);
console.log(newAdmin);

export {};
