import { assert } from "chai";
import SalarySlipGenerator from "../../src/salaryslipkata/SalarySlipGenerator";

describe("SalarySlipGenerator", () => {
  beforeEach(() => {});

  it("calculates the monthly gross salary from the annual one", () => {
    let salarySlip = new SalarySlipGenerator();

    let annualGrossSalary = 5000;
    let monthlyGrossSalary = 416.67;

    assert.equal(salarySlip.generateFor(annualGrossSalary), monthlyGrossSalary);
  });

  it("rounds a number up to 0 decimal digits", () => {
    let number = 416.66667;

    assert.equal(roundUp(number, 0), 417);
  });

  it("rounds a number up to 1 decimal digit", () => {
    let number = 416.66667;

    assert.equal(roundUp(number, 1), 416.7);
  });

  it("rounds a number up to 2 decimal digits", () => {
    let number = 416.66667;

    assert.equal(roundUp(number, 2), 416.67);
  });
});

function roundUp(number, decimalDigits) {
  let factor = Math.pow(10, decimalDigits);

  return Math.round(number * factor) / factor;
}
