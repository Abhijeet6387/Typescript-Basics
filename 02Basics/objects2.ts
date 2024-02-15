type User = {
  readonly _id: string; // Readonly
  name: string;
  email?: string; // Optional
};

let myUser: User = {
  _id: "1234",
  name: "abhi",
  email: "a@a.com",
};

myUser.email = "abc@abc.com";
// myUser._id = "4564" -> Not allowed to reassign a readonly value

// we can also mix match type aliases
// suppose we have a cart type that has product details and user details

type Product = {
  productId: string;
  productName: string;
  price: number;
  rating: number;
  category: string;
};

type Cart = User & {
  products: Product[]; // array of Product type
  discount: number;
  totalAmount: number;
  billId: string;
};

let cartDetails: Cart = {
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

export {};
