"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.city = "Mumbai";
        this.userId = userId; // private properties can be used inside class
        this.email = email;
        this.name = name;
    }
    return User;
}());
// Shortcut
var User2 = /** @class */ (function () {
    function User2(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "Mumbai";
    }
    return User2;
}());
var user1 = new User("109298", "h@hc.com", "hitesh");
// console.log(user1.userId);  Can't access private properties outside class
// user1.city = "Delhi";  Can't modify readonly values
var user2 = new User2("abhi", "a@a.com", "109297");
console.log(user2);
