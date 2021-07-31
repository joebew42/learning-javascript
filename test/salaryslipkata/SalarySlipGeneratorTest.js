import { assert } from "chai";
import SalarySlipGenerator from "../../src/salaryslipkata/SalarySlipGenerator";
import SalarySlip from "../../src/salaryslipkata/SalarySlip";

describe("SalarySlipGenerator", function () {
  beforeEach(function () {});

  describe("for annual gross salaries less or equal than 8,060.00", function () {
    let annualGrossSalary = 8060;

    it("calculates the monthly gross salary", function () {
      let salarySlipGenerator = new SalarySlipGenerator();

      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._monthtlyGrossSalary, 671.67);
    });

    it("do not calculate the national insurance contribution", function () {
      let salarySlipGenerator = new SalarySlipGenerator();

      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._nationalInsuranceContribution, 0);
    });
  });

  describe("for any amount earned above an annual gross salary of 8,060.00", function () {
    let annualGrossSalary = 9060;

    it("calculates the 12% as national insurance contribution", function () {
      let salarySlipGenerator = new SalarySlipGenerator();

      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._nationalInsuranceContribution, 10);
    });
  });

  describe("A SalarySlip", function () {
    it("contains a taxableIncome", function () {
      let aSalarySlip = new SalarySlip(0, 0, 100);

      assert(aSalarySlip._taxableIncome, 100);
    });
  });

  describe("any amount earned above an annual gross salary of 11,000.00", function () {
    let annualGrossSalary = 12000;

    xit("is considered as taxable income", function () {
      let salarySlipGenerator = new SalarySlipGenerator();

      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._taxableIncome, 83.33);
    });
  });
});
