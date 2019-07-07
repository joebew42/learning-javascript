const _StringCalculator = {
  add: function() {
    return -1;
  }
}

const StringCalculator = {
  new: function() {
    return Object.create(_StringCalculator);
  }
}

export default StringCalculator;

