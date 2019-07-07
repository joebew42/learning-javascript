const _RomanNumerals = {
  convert: function(number) {
    if (number == 10) {
      return "X";
    }
    if (number == 9) {
      return "IX";
    }
    if (number > 4 && number < 9) {
      return "V" + "I".repeat(number % 5);
    }
    if (number == 4) {
      return "IV";
    }
    return "I".repeat(number);
  }
}

const RomanNumerals = {
  new: function() {
    return Object.create(_RomanNumerals);
  }
}

export default RomanNumerals;

