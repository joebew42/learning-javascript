var assert = require('chai').assert

import RomanNumerals from '../src/RomanNumerals'

describe("RomanNumerals", () => {
  it("converts 1 to I", () => {
    var romanNumerals = RomanNumerals.new();

    assert.equal(romanNumerals.convert(1), "I");
  })
});
