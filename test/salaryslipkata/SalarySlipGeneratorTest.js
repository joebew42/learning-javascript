import { assert } from "chai";
import SalarySlipGenerator from "../../src/salaryslipkata/SalarySlipGenerator";
import SalarySlip from "../../src/salaryslipkata/SalarySlip";

describe("SalarySlipGenerator", function () {
  beforeEach(function () {});

  it("two salary slips with a different national insurance contribution are not equal", function () {
    let firstSalarySlip = new SalarySlip(100, 50);
    let secondSalarySlip = new SalarySlip(100, 100);

    assert.notDeepEqual(firstSalarySlip, secondSalarySlip);
  });

  describe("for annual gross salaries less or equal than 8,060.00", function () {
    let annualGrossSalary = 8060;

    it("calculates the monthly gross salary", function () {
      let salarySlipGenerator = new SalarySlipGenerator();

      let monthlyGrossSalary = 671.67;

      assert.deepEqual(
        salarySlipGenerator.generateFor(annualGrossSalary),
        new SalarySlip(monthlyGrossSalary)
      );
    });
  });
});
