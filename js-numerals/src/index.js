import { NUMBERS, LARGE_NUMBERS } from "./numbers.js";

document.querySelector("form").submit(function (event) {
  event.preventDefault();
});

document.querySelector("button").addEventListener("click", () => (document.getElementById("").innerHTML = convertNumberToWords(document.getElementById("number").value)));

function convertNumberToWords(number) {
  try {
    number = BigInt(number);
  } catch (ex) {
    return "The inputed number is not valid!";
  }

  let words = [];
  const SPACE = " ";

  let hundredsSlices = sliceNumber(number, 3);

  hundredsSlices.reverse().forEach((slice, index) => {
    let sliceNumberValue = Number(slice);
    if (sliceNumberValue === 0) return;

    let digits = sliceNumber(sliceNumberValue, 1);
    const totalDigits = digits.length;

    let sliceWords = [];

    if (totalDigits > 2) {
      let hundredsDigit = digits.shift();
      sliceWords.push(NUMBERS.ONES[hundredsDigit] + SPACE + NUMBERS.HUNDRED);
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
        sliceWords.push(NUMBERS.ONES[tensAndUnitsValue]);
      } else if (tensAndUnitsValue >= 20) {
        let tensAndUnitsWords = NUMBERS.TENS[tensDigit];

        if (unitsDigit != 0) {
          tensAndUnitsWords += "-" + NUMBERS.ONES[unitsDigit];
        }

        sliceWords.push(tensAndUnitsWords);
      }
    } else {
      if (unitsDigit > 0) {
        sliceWords.push(NUMBERS.ONES[unitsDigit]);
      }
    }

    if (sliceWords) {
      if (index > 0) sliceWords.push(convertLargeNumberToWords(index));
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

function convertLargeNumberToWords(sliceIndex) {
  if (sliceIndex < 1) return;
  sliceIndex--;
  let digits = sliceNumber(sliceIndex, 1);
  const totalDigits = digits.length;

  if (totalDigits === 2) {
    return (
      (LARGE_NUMBERS.UNITS_PREFIX[digits[1]] || "") +
      LARGE_NUMBERS.TENS[digits[0]]
    );
  } else if (totalDigits === 1) {
    return LARGE_NUMBERS.ONES[sliceIndex];
  }
}
