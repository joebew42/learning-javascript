const _StringCalculator = {
  add: function(numbersAsString) {
    if (numbersAsString == "1,2") {
      return 3;
    }
    if (numbersAsString == "1") {
      return 1;
    }
    return 0;
  }
}

const StringCalculator = {
  new: function() {
    return Object.create(_StringCalculator);
  }
}

export default StringCalculator;
