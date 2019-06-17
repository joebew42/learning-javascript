const _RomanNumerals = {
  convert: function(number) {
    return this._convertTens(number);
  },

  _convertTens: function(number) {
    var times = Math.floor(number / 10);
    var rest = number % 10;

    if (times < 4) {
      return "X".repeat(times) + this._convertUnits(rest)
    } else {
      return "XL" + this._convertUnits(rest)
    }
  },

  _convertUnits: function(number) {
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
    if (number == 1) {
      return "I";
    }
    return "";
  }
}

const RomanNumerals = {
  new: function() {
    return Object.create(_RomanNumerals);
  }
}

export default RomanNumerals;

