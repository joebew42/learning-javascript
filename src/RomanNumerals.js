const _RomanNumerals = {
  convert: function(number) {
    let hundreds = this._convertHundreds(number);
    let tens = this._convertTens(number);
    let units = this._convertUnits(number);

    let result = hundreds + tens + units;

    return result;
  },

  _convertHundreds: function(number) {
    if (number >= 100) {
      return "C";
    }
    return "";
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

