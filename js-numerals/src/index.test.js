import { convertNumberToWords } from "./index.js";

let testFunction = convertNumberToWords;
let parameter = 10;
let expectedOutput = "ten";
let result = testFunction(parameter);

console.log(
  "Function: " +
    testFunction.name.concat("()") +
    "\nParameter: " +
    parameter +
    "\nExpected result: " +
    expectedOutput +
    "\nActual result: " +
    result
);
console.assert(result === expectedOutput);
