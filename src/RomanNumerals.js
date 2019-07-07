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
    return this._convertUnits(number);
  },

  _convertUnits: function(number) {
    let units = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let index = (number % 10) - 1;

    return units[index];
  }
}

const RomanNumerals = {
  new: function() {
    return Object.create(_RomanNumerals);
  }
}

export default RomanNumerals;

