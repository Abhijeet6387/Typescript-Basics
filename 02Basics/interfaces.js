"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    dbId: "10291",
    name: "abhi",
    email: "a@a.com",
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
    googleAuthID: "googleauthid",
};
var newAdmin = {
    dbId: "10791",
    name: "hitesh",
    email: "hc@a.com",
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
    googleAuthID: "googleauthid",
    role: "admin",
};
console.log(newUser);
console.log(newAdmin);
