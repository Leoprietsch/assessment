function convertNumberToWords() {
  var number = document.getElementById("number").value;

  var numberLenght = number.length;
  var slicedNumbers = [];

  while (numberLenght > 0) {
    numberLenght -= 3;

    let numberSlice = number.slice(numberLenght);

    number = number.slice(0, numberLenght);
    slicedNumbers.push(numberSlice);
  }

  console.log(slicedNumbers);

  slicedNumbers.forEach((slice) => {
    var sliceLenght = slice.length;
    var slicedSlices = [];

    while (sliceLenght > 0) {
      sliceLenght -= 1;

      let sliceSlice = slice.slice(sliceLenght);

      slice = slice.slice(0, sliceLenght);
      slicedSlices.unshift(sliceSlice);
    }

    console.log(slicedSlices);
  });

  alert(number);
}
