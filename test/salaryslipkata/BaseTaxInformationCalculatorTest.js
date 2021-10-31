import { assert } from "chai";
import BaseTaxInformationCalculator from "../../src/salaryslipkata/BaseTaxInformationCalculator";

describe("BaseTaxInformationCalculator", function () {
  let calculator = new BaseTaxInformationCalculator();

  describe("#generate", function () {
    describe("any amount earned below 11000", function () {
      let annualGrossSalary = 11000;

      it("is not considered a taxable income", function () {
        let taxInformation = calculator.generate(annualGrossSalary);

        assert.equal(taxInformation.taxableIncome(), 0);
        assert.equal(taxInformation.taxPayable(), 0);
      });
    });

    describe("for any amount earned above 11000", function () {
      let annualGrossSalary = 12000;
      let taxInformation;

      this.beforeAll(function () {
        taxInformation = calculator.generate(annualGrossSalary);
      });

      it("is considered taxable income", function () {
        assert.equal(taxInformation.taxableIncome(), 83.33);
      });

      it("is taxed at 20%", function () {
        assert.equal(taxInformation.taxPayable(), 16.67);
      });
    });

    describe("for any amount earned above 43000", function () {
      it("tax information doesn't change", function () {
        let taxInformationFor43000 = calculator.generate(43000);
        let taxInformationFor50000 = calculator.generate(50000);

        assert.equal(
          taxInformationFor43000.taxableIncome(),
          taxInformationFor50000.taxableIncome()
        );
        assert.equal(
          taxInformationFor43000.taxPayable(),
          taxInformationFor50000.taxPayable()
        );
      });
    });
  });
});
