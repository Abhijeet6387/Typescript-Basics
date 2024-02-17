"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
  // return val.toLowerCase()  not allowed on union type
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  // val is number
  return val + 2;
}
function provideId(id) {
  // handle case if id is null
  if (!id) {
    console.log("Id doesn't exist");
    return;
  }
  return id.toLowerCase();
}
function printAll(strs) {
  if (strs) {
    // handles null values
    if (typeof strs === "object") {
      // handle if strs is an array of strings
      for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var s = strs_1[_i];
        console.log(s);
      }
    } else if (typeof strs === "string") {
      // handle if strs is a single string
      console.log(strs);
    }
  }
}
var res1 = detectType(2);
// console.log(res1);
var res2 = provideId("AA124abch");
// console.log(res2);
printAll(["abvch", "uiuind", "qpoush"]);
