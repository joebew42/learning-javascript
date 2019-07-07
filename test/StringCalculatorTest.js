var assert = require('chai').assert

import StringCalculator from '../src/StringCalculator'

describe("StringCalculator", () => {
  var calculator;

  beforeEach(() => {
    calculator = StringCalculator.new();
  })

  it("returns 0 for an empty string", () => {
    let result = calculator.add("");

    assert.equal(result, 0);
  })

});
