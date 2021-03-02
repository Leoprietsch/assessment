import { convertNumberToWords } from "./index.js";

function test(testFunction, parameter, expectedOutput) {
  const funcName = testFunction.name;
  const result = testFunction(parameter);

  console.log(
    "Function: " +
      funcName.concat("()") +
      "\nParameter: " +
      parameter +
      "\nExpected result: " +
      expectedOutput +
      "\nActual result: " +
      result
  );

  console.assert(result === expectedOutput);
}

test(convertNumberToWords, 10, "ten");
