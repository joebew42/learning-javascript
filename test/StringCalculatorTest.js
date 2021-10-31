import { assert } from "chai";
import StringCalculator from "../src/StringCalculator.js";

describe("StringCalculator", () => {
  var calculator;

  beforeEach(() => {
    calculator = StringCalculator.new();
  });

  it("returns 0 for an empty string", () => {
    let result = calculator.add("");

    assert.equal(result, 0);
  });

  it("returns 1 when the string is 1", () => {
    let result = calculator.add("1");

    assert.equal(result, 1);
  });

  it("returns 3 when the string is 1,2", () => {
    let result = calculator.add("1,2");

    assert.equal(result, 3);
  });

  it("returns 6 when the string is 1,2,3", () => {
    let result = calculator.add("1,2,3");

    assert.equal(result, 6);
  });

  it("allows to handle the new line as numbers delimiter", () => {
    let result = calculator.add("1\n2,3");

    assert.equal(result, 6);
  });

  it("allows to handle custom delimiter", () => {
    let result = calculator.add("//;\n1;2;3");

    assert.equal(result, 6);
  });

  it("throws an exception when negatives are provided", () => {
    assert.throws(
      () => {
        calculator.add("1,-2,-3");
      },
      Error,
      "negatives not allowed: -2,-3"
    );
  });
});
