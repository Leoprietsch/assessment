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
