const _StringCalculator = {
  add: function(string) {
    return 0;
  }
}

const StringCalculator = {
  new: function() {
    return Object.create(_StringCalculator);
  }
}

export default StringCalculator;

