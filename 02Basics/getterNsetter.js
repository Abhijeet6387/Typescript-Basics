"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(
    // private userID: string
    email, name) {
        this.email = email;
        this.name = name;
        //   private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        // getter is just some methods to access any properties
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        // getter to access private attribute _courseCount
        get: function () {
            return this._courseCount;
        },
        // setter should have nothing in return type
        set: function (courseNum) {
            if (courseNum <= 1)
                throw new Error("Course count should be more than 1");
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    // private method
    User.prototype.deleteToken = function () {
        var tokenDelete = "1873687gdybmjhvAGv";
        return tokenDelete;
    };
    return User;
}());
// Inheritance
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        // _courseCount when declared protected can be accessed in subClass
        // it can't be accessed outside if it is private
        this._courseCount = 4;
    };
    return SubUser;
}(User));
// const newUser = new User("a@a.com", "abhi");
// console.log("APPLE", newUser.getAppleEmail);
// console.log("COURSE", newUser.courseCount);
// newUser.courseCount = 3;
// console.log("COURSE Update", newUser.courseCount);
// newUser.deleteToken; can't access a private method outside class
var newSubUser = new SubUser("b@b.com", "bhubam");
console.log("City", newSubUser.city);
console.log("Email", newSubUser.email);
console.log("Apple Email", newSubUser.getAppleEmail); // getter
console.log("CourseCount", newSubUser.courseCount); // getter
newSubUser.courseCount = 5; // setter
console.log("CourseCount-UP", newSubUser.courseCount); // getter
console.log("Family", newSubUser.isFamily ? "YES" : "NO");
newSubUser.changeCourseCount();
console.log("Change Course Count", newSubUser.courseCount);
