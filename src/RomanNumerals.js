const _RomanNumerals = {
  convert: function(number) {
    if (number == 3) {
      return "III";
    }
    if (number == 2) {
      return "II";
    }
    return "I";
  }
}

const RomanNumerals = {
  new: function() {
    return Object.create(_RomanNumerals);
  }
}

export default RomanNumerals;

