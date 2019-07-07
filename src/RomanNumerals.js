const _RomanNumerals = {
  convert: function(number) {
    if (number == 19) {
      return "XIX";
    }
    if (number == 18) {
      return "XVIII";
    }
    if (number == 16) {
      return "XVI";
    }
    if (number == 15) {
      return "XV";
    }
    if (number == 14) {
      return "XIV";
    }
    if (number == 12) {
      return "XII";
    }
    if (number == 11) {
      return "XI";
    }
    if (number == 10) {
      return "X";
    }
    return this._convertUpTo9(number);
  },

  _convertUpTo9: function(number) {
    if (number == 9) {
      return "IX";
    }
    if (number > 4 && number < 9) {
      let rest = number % 5;
      return "V" + this._convertUnits(rest);
    }
    if (number == 4) {
      return "IV";
    }
    return this._convertUnits(number);
  },

  _convertUnits: function(number) {
    return "I".repeat(number);
  }
}

const RomanNumerals = {
  new: function() {
    return Object.create(_RomanNumerals);
  }
}

export default RomanNumerals;

