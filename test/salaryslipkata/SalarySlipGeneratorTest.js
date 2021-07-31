import { assert } from "chai";
import SalarySlipGenerator from "../../src/salaryslipkata/SalarySlipGenerator";
import SalarySlip from "../../src/salaryslipkata/SalarySlip";

describe("SalarySlipGenerator", function () {
  beforeEach(function () {});

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

  describe("for any amount earned above an annual gross salary of 8,060.00", function () {
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

  describe("A SalarySlip", function () {
    it("contains a taxableIncome", function () {
      let firstSalarySlip = new SalarySlip(0, 0, 100);
      let secondSalarySlip = new SalarySlip(0, 0, 200);

      assert.notDeepEqual(firstSalarySlip, secondSalarySlip);
    });
  });

  describe("for any amount earned above an annual gross salary of 11,000.00", function () {
    xit("calculates the taxes at 20%", function () {});
  });
});
