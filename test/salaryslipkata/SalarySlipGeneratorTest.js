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

    it("do not calculate the national insurance contribution", function () {
      let salarySlipGenerator = new SalarySlipGenerator();

      let monthlyGrossSalary = 671.67;
      let nationalInsuranceContribution = 0;

      assert.deepEqual(
        salarySlipGenerator.generateFor(annualGrossSalary),
        new SalarySlip(monthlyGrossSalary, nationalInsuranceContribution)
      );
    });
  });

  describe("for amounts earned above an annual gross salary of 8,060.00", function () {
    it("calculates the 12% as national insurance contribution", function () {
      let salarySlipGenerator = new SalarySlipGenerator();

      let annualGrossSalary = 9060;
      let monthlyGrossSalary = 755;
      let nationalInsuranceContribution = 10;

      assert.deepEqual(
        salarySlipGenerator.generateFor(annualGrossSalary),
        new SalarySlip(monthlyGrossSalary, nationalInsuranceContribution)
      );
    });
  });
});
