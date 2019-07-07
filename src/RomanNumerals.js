const _RomanNumerals = {
  convert: function(number) {
    let converters = [
      this._convertThousands,
      this._convertHundreds,
      this._convertTens,
      this._convertUnits
    ]

    return converters.reduce((accumulator, toRoman) => accumulator + toRoman(number), "");
  },

  _convertThousands: function(number) {
    let thousands = ["", "M", "MM", "MMM"]
    let index = Math.floor(number / 1000) % 10;

    return thousands[index];
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

