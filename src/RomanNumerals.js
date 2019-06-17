const _RomanNumerals = {
  convert: function(number) {
    return this._convertUpTo100(number);
  },

  _convertUpTo100: function(number) {
    var times = Math.floor(number / 50);
    var rest = number % 50;

    return "L".repeat(times) + this._convertUpTo49(rest);
  },

  _convertUpTo49: function(number) {
    var times = Math.floor(number / 10);
    var rest = number % 10;

    if (times < 4) {
      return "X".repeat(times) + this._convertUpTo10(rest);
    } else {
      return "XL" + this._convertUpTo10(rest);
    }
  },

  _convertUpTo10: function(number) {
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

