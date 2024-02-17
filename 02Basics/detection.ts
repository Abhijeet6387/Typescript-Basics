function detectType(val: number | string) {
  // return val.toLowerCase()  not allowed on union type
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  // val is number
  return val + 2;
}

function provideId(id: string | null) {
  // handle case if id is null
  if (!id) {
    console.log("Id doesn't exist");
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    // handles null values
    if (typeof strs === "object") {
      // handle if strs is an array of strings
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      // handle if strs is a single string
      console.log(strs);
    }
  }
}
const res1 = detectType(2);
console.log(res1);
const res2 = provideId("AA124abch");
console.log(res2);
printAll(["abvch", "uiuind", "qpoush"]);

export {};
