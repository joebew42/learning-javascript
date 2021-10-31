import { assert } from "chai";
import HighTaxInformationCalculator from "../../src/salaryslipkata/HighTaxInformationCalculator.js";

describe("HighTaxInformationCalculator", function () {
  let calculator = new HighTaxInformationCalculator();

  describe("#calculateFor", function () {
    describe("any amount earned below 43000", function () {
      let annualGrossSalary = 42999;

      it("is not considered a taxable income", function () {
        let taxInformation = calculator.calculateFor(annualGrossSalary);

        assert.equal(taxInformation.taxableIncome(), 0);
        assert.equal(taxInformation.taxPayable(), 0);
      });
    });

    describe("for any amount earned above 43000", function () {
      let annualGrossSalary = 44000;
      let taxInformation;

      this.beforeAll(function () {
        taxInformation = calculator.calculateFor(annualGrossSalary);
      });

      it("is considered taxable income", function () {
        assert.equal(taxInformation.taxableIncome(), 83.33);
      });

      it("is taxed at 40%", function () {
        assert.equal(taxInformation.taxPayable(), 33.33);
      });
    });
  });
});
