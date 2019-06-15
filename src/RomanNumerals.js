const _RomanNumerals = {
  convert: function(number) {
    return "I";
  }
}

const RomanNumerals = {
  new: function() {
    return Object.create(_RomanNumerals);
  }
}

export default RomanNumerals;

