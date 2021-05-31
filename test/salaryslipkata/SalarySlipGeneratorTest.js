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
});
