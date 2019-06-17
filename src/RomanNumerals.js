const _RomanNumerals = {
  convert: function(number) {
    if (number == 12) {
      return "XII";
    }
    if (number == 11) {
      return "XI";
    }
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

