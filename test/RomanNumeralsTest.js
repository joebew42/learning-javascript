var assert = require('chai').assert

import RomanNumerals from '../src/RomanNumerals'

describe("RomanNumerals", () => {
  var romanNumerals;

  beforeEach(() => {
    romanNumerals = RomanNumerals.new();
  })

  it("converts 1 to I", () => {
    assert.equal(romanNumerals.convert(1), "I");
  })

  it("converts 2 to II", () => {
    assert.equal(romanNumerals.convert(2), "II");
  })

  it("converts 3 to III", () => {
    assert.equal(romanNumerals.convert(3), "III");
  })

  it("converts 4 to IV", () => {
    assert.equal(romanNumerals.convert(4), "IV");
  })
});
