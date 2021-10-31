import TaxInformation from "./TaxInformation";

const MONTHS_IN_A_YEAR = 12;

const BASE_TAXABLE_INCOME_THRESHOLD = 11000;
const BASE_TAXABLE_INCOME_TAX_PERCENTAGE = 0.2;

const HIGHER_TAXABLE_INCOME_THRESHOLD = 43000;

class BaseTaxInformationCalculator {
  generate(annualGrossSalary) {
    if (this.#notTaxable(annualGrossSalary)) {
      return TaxInformation.empty();
    }

    return this.#calculateTaxes(annualGrossSalary);
  }

  #notTaxable(annualGrossSalary) {
    return annualGrossSalary < BASE_TAXABLE_INCOME_THRESHOLD;
  }

  #calculateTaxes(annualGrossSalary) {
    let taxableIncome = this.#amountEarnedAbove(
      BASE_TAXABLE_INCOME_THRESHOLD,
      Math.min(annualGrossSalary, HIGHER_TAXABLE_INCOME_THRESHOLD)
    );
    let taxableIncomePerMonth = this.#roundUp(
      taxableIncome / MONTHS_IN_A_YEAR,
      2
    );
    let taxPayablePerMonth = this.#roundUp(
      taxableIncomePerMonth * BASE_TAXABLE_INCOME_TAX_PERCENTAGE,
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

export default BaseTaxInformationCalculator;
