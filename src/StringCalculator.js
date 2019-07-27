const _StringCalculator = {
  add: function(string) {
    if (string == "1") {
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
