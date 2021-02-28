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

const LARGES = {
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
  10: "decillion",
  11: "undecillion",
  12: "duodecillion",
  13: "tredecillion",
  14: "quattuordecillion",
  15: "quindecillion",
  16: "sedecillion",
  17: "septendecillion",
  18: "octodecillion",
  19: "novendecillion",
  20: "vigintillion",
  21: "unvigintillion",
  22: "duovigintillion",
  23: "tresvigintillion",
  24: "quattuorvigintillion",
  25: "quinvigintillion",
  26: "sesvigintillion",
  27: "septemvigintillion",
  28: "octovigintillion",
  29: "novemvigintillion",
  30: "trigintillion",
  31: "untrigintillion",
  32: "duotrigintillion",
  33: "trestrigintillion",
  34: "quattuortrigintillion",
  35: "quintrigintillion",
  36: "sestrigintillion",
  37: "septentrigintillion",
  38: "octotrigintillion",
  39: "noventrigintillion",
  40: "quadragintillion",
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
      if (index > 0) sliceWords.push(LARGES[index - 1]);
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
