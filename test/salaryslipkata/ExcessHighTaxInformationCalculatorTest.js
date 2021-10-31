import { assert } from "chai";
import ExcessHighTaxInformationCalculator from "../../src/salaryslipkata/ExcessHighTaxInformationCalculator.js";

describe("ExcessHighTaxInformationCalculator", function () {
  let calculator = new ExcessHighTaxInformationCalculator();

  describe("#calculateFor", function () {
    describe("any amount earned below 100000", function () {
      let annualGrossSalary = 99999;

      it("is not considered a taxable income", function () {
        let taxInformation = calculator.calculateFor(annualGrossSalary);

        assert.equal(taxInformation.taxableIncome(), 0);
        assert.equal(taxInformation.taxPayable(), 0);
      });
    });

    describe("half of the amount earned above 100000", function () {
      let annualGrossSalary = 102000;
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
