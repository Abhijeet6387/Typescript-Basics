"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function returns the area for type Shape
function getArea1(shape) {
  if (shape.kind === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  } else {
    // return shape.side ** 2; won't work for Rectangle
  }
}
// suppose we introduce a new type Rectangle then the getArea1 would not work.
// for it we can do exhaustive checking with switch and never type
function getArea2(shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * Math.pow(shape.radius, 2);
    case "square":
      return Math.pow(shape.side, 2);
    case "rectangle":
      return shape.length * shape.breadth;
    // default case which would never run - exhaustiveness checking
    default:
      var _exhaustiveCheck = shape;
      return _exhaustiveCheck;
  }
}
var circle = {
  kind: "circle",
  radius: 4,
};
var square = {
  kind: "square",
  side: 5,
};
var rectangle = {
  kind: "rectangle",
  length: 2,
  breadth: 4,
};
var res1 = getArea2(circle);
var res2 = getArea2(square);
var res3 = getArea2(rectangle);
console.log(res1, res2, res3);
