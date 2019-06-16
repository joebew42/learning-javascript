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

  it("converts 5 to V", () => {
    assert.equal(romanNumerals.convert(5), "V");
  })

  it("converts 6 to VI", () => {
    assert.equal(romanNumerals.convert(6), "VI");
  })

  it("converts 7 to VII", () => {
    assert.equal(romanNumerals.convert(7), "VII");
  })

  it("converts 8 to VIII", () => {
    assert.equal(romanNumerals.convert(8), "VIII");
  })

  it("converts 9 to IX", () => {
    assert.equal(romanNumerals.convert(9), "IX");
  })

  it("converts 10 to X", () => {
    assert.equal(romanNumerals.convert(10), "X");
  })
});
