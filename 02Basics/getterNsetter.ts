class User {
  //   private _courseCount = 1;
  protected _courseCount = 1;
  readonly city: string = "Jaipur";
  constructor(
    // private userID: string
    public email: string,
    public name: string
  ) {}

  // getter is just some methods to access any properties
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // getter to access private attribute _courseCount
  get courseCount(): number {
    return this._courseCount;
  }

  // setter should have nothing in return type
  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("Course count should be more than 1");
    this._courseCount = courseNum;
  }

  // private method
  private deleteToken(): string {
    let tokenDelete = "1873687gdybmjhvAGv";
    return tokenDelete;
  }
}

// Inheritance
class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    // _courseCount when declared protected can be accessed in subClass
    // it can't be accessed outside if it is private
    this._courseCount = 4;
  }
}

// const newUser = new User("a@a.com", "abhi");
// console.log("APPLE", newUser.getAppleEmail);
// console.log("COURSE", newUser.courseCount);
// newUser.courseCount = 3;
// console.log("COURSE Update", newUser.courseCount);
// newUser.deleteToken; can't access a private method outside class

const newSubUser = new SubUser("b@b.com", "bhubam");
console.log("City", newSubUser.city);
console.log("Email", newSubUser.email);
console.log("Apple Email", newSubUser.getAppleEmail); // getter
console.log("CourseCount", newSubUser.courseCount); // getter
newSubUser.courseCount = 5; // setter
console.log("CourseCount-UP", newSubUser.courseCount); // getter
console.log("Family", newSubUser.isFamily ? "YES" : "NO");
newSubUser.changeCourseCount();
console.log("Change Course Count", newSubUser.courseCount);

export {};
