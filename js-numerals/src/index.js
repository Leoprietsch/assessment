const ONES = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const TENS = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

const LARGE_ONES = {
  0: "thousand",
  1: "million",
  2: "billion",
  3: "trillion",
  4: "quadrillion",
  5: "quintillion",
  6: "sextillion",
  7: "septillion",
  8: "octillion",
  9: "nonillion",
};

const LARGE_ONES_PREFIX = {
  1: "un",
  2: "duo",
  3: "tres",
  4: "quattuor",
  5: "quin",
  6: "sex",
  7: "septen",
  8: "octo",
  9: "noven",
};

const LARGE_TENS = {
  1: "decillion",
  2: "vigintillion",
  3: "trigintillion",
  4: "quadragintillion",
  5: "quinquagintillion",
  6: "sexagintillion",
  7: "septuagintillion",
  8: "octogintillion",
  9: "nonagintillion",
};

const HUNDRED = "hundred";

const SPACE = " ";

function convertNumberToWords() {
  let number = BigInt(document.getElementById("number").value);
  if (number == 0) return alert(ONES[number]);

  let words = [];

  let hundredsSlices = sliceNumber(number, 3);

  hundredsSlices.reverse().forEach((slice, index) => {
    let sliceNumberValue = Number(slice);
    if (sliceNumberValue === 0) return;

    let digits = sliceNumber(sliceNumberValue, 1);
    const totalDigits = digits.length;

    let sliceWords = [];

    if (totalDigits > 2) {
      let hundredsDigit = digits.shift();
      sliceWords.push(ONES[hundredsDigit] + SPACE + HUNDRED);
    }

    let unitsDigit = digits.pop();
    let tensDigit = digits.pop() || "";
    let tensAndUnitsValue = Number(tensDigit + unitsDigit);

    if (
      (totalDigits > 2 || hundredsSlices.length - 1 > index) &&
      tensAndUnitsValue > 0
    ) {
      sliceWords.push("and");
    }

    if (totalDigits > 1) {
      if (tensAndUnitsValue > 0 && tensAndUnitsValue < 20) {
        sliceWords.push(ONES[tensAndUnitsValue]);
      } else if (tensAndUnitsValue >= 20) {
        let tensAndUnitsWords = TENS[tensDigit];

        if (unitsDigit != 0) {
          tensAndUnitsWords += "-" + ONES[unitsDigit];
        }

        sliceWords.push(tensAndUnitsWords);
      }
    } else {
      if (unitsDigit > 0) {
        sliceWords.push(ONES[unitsDigit]);
      }
    }

    if (sliceWords) {
      sliceWords.push(convertLargeNumberToWords(index));
      words.unshift(sliceWords.join(SPACE));
    }
  });

  alert(words.join(SPACE));
}

function sliceNumber(number, sliceLenght) {
  number = number.toString();
  let numberLenght = number.length;
  let slices = [];

  while (numberLenght > 0) {
    numberLenght -= sliceLenght;

    let numberSlice = number.slice(numberLenght < 0 ? 0 : numberLenght);

    slices.unshift(numberSlice);
    number = number.slice(0, numberLenght);
  }

  return slices;
}

function convertLargeNumberToWords(number) {
  if (number < 1) return;
  number--;
  let digits = sliceNumber(number, 1);
  const totalDigits = digits.length;

  if (totalDigits === 2) {
    return (LARGE_ONES_PREFIX[digits[1]] || "") + LARGE_TENS[digits[0]];
  } else if (totalDigits === 1) {
    return LARGE_ONES[number];
  }
}
