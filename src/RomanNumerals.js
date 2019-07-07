const _RomanNumerals = {
  convert: function(number) {
    let thousands = this._convertThousands(number);
    let hundreds = this._convertHundreds(number);
    let tens = this._convertTens(number);
    let units = this._convertUnits(number);

    let result = thousands + hundreds + tens + units;

    return result;
  },

  _convertThousands: function(number) {
    if (number == 3000) {
      return "MMM";
    }
    if (number == 2000) {
      return "MM";
    }
    if (number == 1000) {
      return "M";
    }
    return "";
  },

  _convertHundreds: function(number) {
    let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let index = Math.floor(number / 100) % 10;

    return hundreds[index];
  },

  _convertTens: function(number) {
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    let index = Math.floor(number / 10) % 10;

    return tens[index];
  },

  _convertUnits: function(number) {
    let units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let index = number % 10;

    return units[index];
  }
}

const RomanNumerals = {
  new: function() {
    return Object.create(_RomanNumerals);
  }
}

export default RomanNumerals;

