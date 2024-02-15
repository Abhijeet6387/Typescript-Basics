class User {
  private userId: string; // can also use # to mark private eg: #userId
  public email: string;
  name: string; // public by default
  readonly city: string = "Mumbai";
  constructor(email: string, name: string, userId: string) {
    this.userId = userId; // private properties can be used inside class
    this.email = email;
    this.name = name;
  }
}
// Shortcut
class User2 {
  readonly city: string = "Mumbai";
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}
}
const user1 = new User("109298", "h@hc.com", "hitesh");

// console.log(user1.userId);  Can't access private properties outside class
// user1.city = "Delhi";  Can't modify readonly values

const user2 = new User2("abhi", "a@a.com", "109297");

console.log(user2);

export {};
