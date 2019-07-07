var assert = require('chai').assert

import RomanNumerals from '../src/RomanNumerals'

describe("RomanNumerals", () => {
  var romanNumerals;

  beforeEach(() => {
    romanNumerals = RomanNumerals.new();
  })

  var romans =
    Object.entries({
      1:    "I",
      // 2:    "II",
      // 3:    "III",
      // 4:    "IV",
      // 5:    "V",
      // 6:    "VI",
      // 7:    "VII",
      // 8:    "VIII",
      // 9:    "IX",
      // 10:   "X",
      // 11:   "XI",
      // 12:   "XII",
      // 15:   "XV",
      // 19:   "XIX",
      // 20:   "XX",
      // 30:   "XXX",
      // 49:   "XLIX",
      // 50:   "L",
      // 60:   "LX",
      // 70:   "LXX",
      // 79:   "LXXIX",
      // 80:   "LXXX",
      // 89:   "LXXXIX",
      // 90:   "XC",
      // 91:   "XCI",
      // 92:   "XCII",
      // 99:   "XCIX",
      // 100:  "C",
      // 500:  "D",
      // 1000: "M",
    });

  romans.forEach(([decimal, roman]) => {
    it(`converts ${decimal}\tto ${roman}`, () => {
      assert.equal(romanNumerals.convert(decimal), roman);
    })
  })
});
