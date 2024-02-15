"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1234",
    name: "abhi",
    email: "a@a.com",
};
myUser.email = "abc@abc.com";
var cartDetails = {
    _id: "1234iudub",
    name: "abhijeet",
    products: [
        {
            productId: "2039597",
            productName: "Shirt",
            price: 1000,
            rating: 4,
            category: "men's fashion",
        },
        {
            productId: "2032897",
            productName: "Jeans",
            price: 1400,
            rating: 4.2,
            category: "men's fashion",
        },
    ],
    discount: 50,
    totalAmount: 1200,
    billId: "909829101",
};
console.log(cartDetails);
