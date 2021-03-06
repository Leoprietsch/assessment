import { convertNumberToWords, convertLargeNumberToWords } from "./index.js";

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

  //setup tens
  test(convertNumberToWords, "20", "twenty");
  test(convertNumberToWords, "30", "thirty");
  test(convertNumberToWords, "40", "forty");
  test(convertNumberToWords, "50", "fifty");
  test(convertNumberToWords, "60", "sixty");
  test(convertNumberToWords, "70", "seventy");
  test(convertNumberToWords, "80", "eighty");
  test(convertNumberToWords, "90", "ninety");

  //setup tens with ones
  test(convertNumberToWords, "21", "twenty-one");
  test(convertNumberToWords, "22", "twenty-two");
  test(convertNumberToWords, "33", "thirty-three");
  test(convertNumberToWords, "44", "forty-four");
  test(convertNumberToWords, "55", "fifty-five");
  test(convertNumberToWords, "66", "sixty-six");
  test(convertNumberToWords, "77", "seventy-seven");
  test(convertNumberToWords, "88", "eighty-eight");
  test(convertNumberToWords, "99", "ninety-nine");

  //setup hundreds
  test(convertNumberToWords, "111", "one hundred and eleven");
  test(convertNumberToWords, "222", "two hundred and twenty-two");
  test(convertNumberToWords, "333", "three hundred and thirty-three");
  test(convertNumberToWords, "444", "four hundred and forty-four");
  test(convertNumberToWords, "555", "five hundred and fifty-five");
  test(convertNumberToWords, "666", "six hundred and sixty-six");
  test(convertNumberToWords, "777", "seven hundred and seventy-seven");
  test(convertNumberToWords, "888", "eight hundred and eighty-eight");
  test(convertNumberToWords, "999", "nine hundred and ninety-nine");

  //setup thousand 
  test(convertNumberToWords, "1000", "one thousand");

  //setup tens and units having 'and' conjunction even without hundreds
  test(convertNumberToWords, "1001", "one thousand and one");
  test(convertNumberToWords, "1011", "one thousand and eleven");
  test(convertNumberToWords, "1021", "one thousand and twenty-one");

  //setup larger than hundreds
  test(convertNumberToWords, "1111", "one thousand one hundred and eleven");
  test(convertNumberToWords, "2222", "two thousand two hundred and twenty-two");
  test(convertNumberToWords, "3333", "three thousand three hundred and thirty-three");
  test(convertNumberToWords, "4444", "four thousand four hundred and forty-four");
  test(convertNumberToWords, "5555", "five thousand five hundred and fifty-five");
  test(convertNumberToWords, "6666", "six thousand six hundred and sixty-six");
  test(convertNumberToWords, "7777", "seven thousand seven hundred and seventy-seven");
  test(convertNumberToWords, "8888", "eight thousand eight hundred and eighty-eight");
  test(convertNumberToWords, "9999", "nine thousand nine hundred and ninety-nine");

  //setup large numbers without smaller hundreds, tens or units
  test(convertNumberToWords, "1000", "one thousand");
  test(convertNumberToWords, "1000000", "one million");
  test(convertNumberToWords, "1000000000", "one billion");
  test(convertNumberToWords, "1000000000000", "one trillion");
  test(convertNumberToWords, "1000000000000000", "one quadrillion");
  test(convertNumberToWords, "1000000000000000000", "one quintillion");
  test(convertNumberToWords, "1000000000000000000000", "one sextillion");
  test(convertNumberToWords, "1000000000000000000000000", "one septillion");
  test(convertNumberToWords, "1000000000000000000000000000", "one octillion");
  test(convertNumberToWords, "1000000000000000000000000000000", "one nonillion");

  //setup large numbers tens
  test(convertNumberToWords, "1000000000000000000000000000000000", "one decillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000", "one vigintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one trigintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one quadragintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one quinquagintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one sexagintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one septuagintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one octogintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one nonagintillion");

  //setup large numbers tens with units prefix
  test(convertNumberToWords, "1000000000000000000000000000000000000", "one undecillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000", "one duovigintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one trestrigintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one quattuorquadragintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one quinquinquagintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one sexsexagintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one septenseptuagintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one octooctogintillion");
  test(convertNumberToWords, "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "one novennonagintillion");
}

function runConvertLargeNumberToWordsTests() {
  //setup large ones
  test(convertLargeNumberToWords, 1, "thousand");
  test(convertLargeNumberToWords, 2, "million");
  test(convertLargeNumberToWords, 3, "billion");
  test(convertLargeNumberToWords, 4, "trillion");
  test(convertLargeNumberToWords, 5, "quadrillion");
  test(convertLargeNumberToWords, 6, "quintillion");
  test(convertLargeNumberToWords, 7, "sextillion");
  test(convertLargeNumberToWords, 8, "septillion");
  test(convertLargeNumberToWords, 9, "octillion");
  test(convertLargeNumberToWords, 10, "nonillion");

  //setup large tens
  test(convertLargeNumberToWords, 11, "decillion");
  test(convertLargeNumberToWords, 21, "vigintillion");
  test(convertLargeNumberToWords, 31, "trigintillion");
  test(convertLargeNumberToWords, 41, "quadragintillion");
  test(convertLargeNumberToWords, 51, "quinquagintillion");
  test(convertLargeNumberToWords, 61, "sexagintillion");
  test(convertLargeNumberToWords, 71, "septuagintillion");
  test(convertLargeNumberToWords, 81, "octogintillion");
  test(convertLargeNumberToWords, 91, "nonagintillion");

  test(convertLargeNumberToWords, 12, "undecillion");
  test(convertLargeNumberToWords, 23, "duovigintillion");
  test(convertLargeNumberToWords, 34, "trestrigintillion");
  test(convertLargeNumberToWords, 45, "quattuorquadragintillion");
  test(convertLargeNumberToWords, 56, "quinquinquagintillion");
  test(convertLargeNumberToWords, 67, "sexsexagintillion");
  test(convertLargeNumberToWords, 78, "septenseptuagintillion");
  test(convertLargeNumberToWords, 89, "octooctogintillion");
  test(convertLargeNumberToWords, 100, "novennonagintillion");
}

runConvertNumberToWordsTests();
runConvertLargeNumberToWordsTests();
