const _RomanNumerals = {
  convert: function(number) {
    if (number == 10) {
      return "X";
    }
    if (number == 9) {
      return "IX";
    }
    if (number == 8) {
      return "VIII";
    }
    if (number == 7) {
      return "VII";
    }
    if (number == 6) {
      return "VI";
    }
    if (number == 5) {
      return "V";
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

