import { assert } from "chai";
import SalarySlipGenerator from "../../src/salaryslipkata/SalarySlipGenerator";

describe("SalarySlipGenerator", function () {
  let salarySlipGenerator = new SalarySlipGenerator();

  beforeEach(function () {});

  describe("for annual gross salaries less or equal than 8,060.00", function () {
    let annualGrossSalary = 8060;

    it("calculates the monthly gross salary", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._monthtlyGrossSalary, 671.67);
    });

    it("do not calculate the national insurance contribution", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._nationalInsuranceContribution, 0);
    });
  });

  describe("for any amount earned above an annual gross salary of 8,060.00", function () {
    let annualGrossSalary = 9060;

    it("calculates the 12% as national insurance contribution", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._nationalInsuranceContribution, 10);
    });
  });

  describe("any amount earned below an annual gross salary of 11,000.00 or so", function () {
    let annualGrossSalary = 11000;

    it("is not considered as taxable income", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();

      assert.equal(taxInformation.taxableIncome(), 0);
    });

    it("is not subject to be taxed", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();

      assert.equal(taxInformation.taxableIncome(), 0);
      assert.equal(taxInformation.taxPayable(), 0);
      assert.equal(
        salarySlip.taxFreeAllowance(),
        salarySlip._monthtlyGrossSalary
      );
    });
  });

  describe("any amount earned above an annual gross salary of 11,000.00", function () {
    let annualGrossSalary = 12000;

    it("is considered a taxable income", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();

      assert.equal(taxInformation.taxableIncome(), 83.33);
    });

    it("has a tax of the 20% on its taxable income", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();

      assert.equal(taxInformation.taxPayable(), 16.67);
    });

    it("has a tax-free allowance net of the taxable income", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();
      let expectedTaxFreeAllowance =
        salarySlip._monthtlyGrossSalary - taxInformation.taxableIncome();

      assert.equal(salarySlip.taxFreeAllowance(), expectedTaxFreeAllowance);
    });
  });

  describe("for any amount earned above an annual gross salary of 43,000.00", function () {
    let annualGrossSalary = 45000;

    it("calculates the 2% more on the national insurance contribution", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      assert.equal(salarySlip._nationalInsuranceContribution, 352.73);
    });
  });

  describe("any amount earned above an annual gross salary of 43,000.00", function () {
    let annualGrossSalary = 45000;

    it("is considered a taxable income", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();

      assert.equal(taxInformation.taxableIncome(), 2833.34);
    });

    it("has a tax of the 40% on its taxable income", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();

      assert.equal(taxInformation.taxPayable(), 600.0);
    });

    it("has a tax-free allowance net of the taxable income", function () {
      let salarySlip = salarySlipGenerator.generateFor(annualGrossSalary);

      let taxInformation = salarySlip.taxInformation();
      let expectedTaxFreeAllowance =
        salarySlip._monthtlyGrossSalary - taxInformation.taxableIncome();

      assert.equal(salarySlip.taxFreeAllowance(), expectedTaxFreeAllowance);
    });
  });
});
