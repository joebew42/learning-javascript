const _StringCalculator = {
  add: function (numbersAsString) {
    return numbersAsString.split(",")
      .map(Number)
      .reduce((sum, current) => sum + current, 0);
  }
}

const StringCalculator = {
  new: function () {
    return Object.create(_StringCalculator);
  }
}

export default StringCalculator;
