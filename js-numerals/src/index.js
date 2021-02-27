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
  let number = document.getElementById("number").value;

  let slicedNumbers = sliceNumber(number, 3);
  console.log(slicedNumbers);

  slicedNumbers.forEach((numberSlice) => {
    let slicedSlice = sliceNumber(numberSlice, 1).reverse();
    console.log(slicedSlice);
  });

  alert(number);
}

function sliceNumber(number, sliceLenght) {
  let numberLenght = number.length;
  let slicedNumbers = [];

  while (numberLenght > 0) {
    numberLenght -= sliceLenght;

    let numberSlice = number.slice(numberLenght);

    number = number.slice(0, numberLenght);
    slicedNumbers.push(numberSlice);
  }

  return slicedNumbers;
}
