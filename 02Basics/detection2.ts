// Discriminated Unions
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

// discriminated based on kind of shapes
type Shape = Circle | Square | Rectangle;

// function returns the area for type Shape
function getArea1(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    // return shape.side ** 2; won't work for Rectangle
  }
}

// suppose we introduce a new type Rectangle then the getArea1 would not work.
// for it we can do exhaustive checking with switch and never type

function getArea2(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.length * shape.breadth;
    // default case which would never run - exhaustiveness checking
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
const circle: Circle = {
  kind: "circle",
  radius: 4,
};
const square: Square = {
  kind: "square",
  side: 5,
};
const rectangle: Rectangle = {
  kind: "rectangle",
  length: 2,
  breadth: 4,
};

const res1 = getArea2(circle);
const res2 = getArea2(square);
const res3 = getArea2(rectangle);
console.log(res1, res2, res3);

export {};
