import { assert } from "chai";
import SalarySlipGenerator from "../../src/salaryslipkata/SalarySlipGenerator";
import SalarySlip from "../../src/salaryslipkata/SalarySlip";

describe("SalarySlipGenerator", function () {
  beforeEach(function () {});

  it("calculates the monthly gross salary from the annual one", function () {
    let salarySlipGenerator = new SalarySlipGenerator();

    let annualGrossSalary = 5000;
    let monthlyGrossSalary = 416.67;

    assert.deepEqual(
      salarySlipGenerator.generateFor(annualGrossSalary),
      new SalarySlip(monthlyGrossSalary)
    );
  });
});
