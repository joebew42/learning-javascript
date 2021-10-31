import TaxInformation from "./TaxInformation.js";

const MONTHS_IN_A_YEAR = 12;

const TAXABLE_INCOME_THRESHOLD = 43000;
const TAXABLE_INCOME_TAX_PERCENTAGE = 0.4;

class HighTaxInformationCalculator {
  calculateFor(annualGrossSalary) {
    if (this.#notTaxable(annualGrossSalary)) {
      return TaxInformation.empty();
    }

    return this.#calculateTaxes(annualGrossSalary);
  }

  #notTaxable(annualGrossSalary) {
    return annualGrossSalary < TAXABLE_INCOME_THRESHOLD;
  }

  #calculateTaxes(annualGrossSalary) {
    let taxableIncome = this.#amountEarnedAbove(
      TAXABLE_INCOME_THRESHOLD,
      annualGrossSalary
    );
    let taxableIncomePerMonth = this.#roundUp(
      taxableIncome / MONTHS_IN_A_YEAR,
      2
    );
    let taxPayablePerMonth = this.#roundUp(
      taxableIncomePerMonth * TAXABLE_INCOME_TAX_PERCENTAGE,
      2
    );
    return new TaxInformation(taxableIncomePerMonth, taxPayablePerMonth);
  }

  #amountEarnedAbove(threshold, amount) {
    return amount - threshold;
  }

  #roundUp(number, decimalDigits) {
    let factor = Math.pow(10, decimalDigits);
    return Math.round(number * factor) / factor;
  }
}

export default HighTaxInformationCalculator;
