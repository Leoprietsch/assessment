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

function runConvertNumberToWordsTests() {
  console.log("Convert number function tests");

  //setup ones
  test(convertNumberToWords, 0, "zero");
  test(convertNumberToWords, 1, "one");
  test(convertNumberToWords, 2, "two");
  test(convertNumberToWords, 3, "three");
  test(convertNumberToWords, 4, "four");
  test(convertNumberToWords, 5, "five");
  test(convertNumberToWords, 6, "six");
  test(convertNumberToWords, 7, "seven");
  test(convertNumberToWords, 8, "eight");
  test(convertNumberToWords, 9, "nine");

  //setup teens
  test(convertNumberToWords, "10", "ten");
  test(convertNumberToWords, "11", "eleven");
  test(convertNumberToWords, "12", "twelve");
  test(convertNumberToWords, "13", "thirteen");
  test(convertNumberToWords, "14", "fourteen");
  test(convertNumberToWords, "15", "fifteen");
  test(convertNumberToWords, "16", "sixteen");
  test(convertNumberToWords, "17", "seventeen");
  test(convertNumberToWords, "18", "eighteen");
  test(convertNumberToWords, "19", "nineteen");
}

runConvertNumberToWordsTests();
