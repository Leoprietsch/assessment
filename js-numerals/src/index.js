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
  let number = Number(document.getElementById("number").value);

  let numberWords = [];
  if (number === 0) {
    numberWords.push(ONES[number]);
  } else {
    let slicedNumbers = sliceNumber(number, 3).reverse();

    slicedNumbers.forEach((numberSlice, index) => {
      let number = Number(numberSlice);
      if (number === 0) return;
      let slicedSlice = sliceNumber(number, 1);
      const digits = slicedSlice.length;

      let sliceWords = [];

      if (digits > 2) {
        let hundredsNumber = slicedSlice.shift();
        sliceWords.push(ONES[hundredsNumber] + SPACE + HUNDRED);
      }

      if (digits > 1) {
        let tens = slicedSlice.shift();
        let unit = slicedSlice.shift();
        let number = Number(tens.concat(unit));

        if (number > 0 && number < 20) {
          sliceWords.push(ONES[Number(number)]);
        } else if (number >= 20) {
          let tensAndUnitWords = TENS[tens];

          if (unit != 0) {
            tensAndUnitWords += "-" + ONES[unit];
          }

          sliceWords.push(tensAndUnitWords);
        }
      } else {
        let unit = slicedSlice.shift();

        if (unit > 0) {
          sliceWords.push(ONES[unit]);
        }
      }

      if (sliceWords) {
        if (index > 0) sliceWords.push(LARGES[index - 1]);
        numberWords.unshift(sliceWords.join(SPACE));
      }
    });
  }
  alert(numberWords.join(SPACE));
}

function sliceNumber(number, sliceLenght) {
  let numberString = number.toString();
  let numberLenght = numberString.length;
  let slicedNumbers = [];

  while (numberLenght > 0) {
    numberLenght -= sliceLenght;

    let numberSlice = numberString.slice(numberLenght < 0 ? 0 : numberLenght);

    slicedNumbers.unshift(numberSlice);
    numberString = numberString.slice(0, numberLenght);
  }

  return slicedNumbers;
}
