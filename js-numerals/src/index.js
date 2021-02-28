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

function convertNumberToWords() {
  let number = Number(document.getElementById("number").value);

  let numberWords = [];
  if (number === 0) {
    numberWords.push(ONES[number]);
  } else {
    let slicedNumbers = sliceNumber(number, 3);

    slicedNumbers.forEach((numberSlice) => {
      let number = Number(numberSlice);
      let slicedSlice = sliceNumber(number, 1);
      const digits = slicedSlice.length;

      if (digits > 2) {
        let hundredsNumber = slicedSlice.shift();
        numberWords.push(ONES[hundredsNumber] + " hundred");
      }

      if (digits > 1) {
        let tens = slicedSlice.shift();
        let unit = slicedSlice.shift();
        let number = Number(tens.concat(unit));

        if (number > 0 && number < 20) {
          numberWords.push(ONES[Number(number)]);
        } else if (number >= 20) {
          let tensAndUnit = TENS[tens];

          if (unit > 0) {
            tensAndUnit += "-" + ONES[unit];
          }

          numberWords.push(tensAndUnit);
        }
      } else {
        let unit = slicedSlice.shift();

        if (unit > 0) {
          numberWords.push(ONES[unit]);
        }
      }
    });
  }
  alert(numberWords.join(" "));
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
