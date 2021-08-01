import SalarySlip from "./SalarySlip";
import TaxInformation from "./TaxInformation";

const MONTHS_IN_A_YEAR = 12;

const NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD = 8060;
const NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE = 0.12;

const TAXABLE_INCOME_THRESHOLD = 11000;

class SalarySlipGenerator {
  constructor() {}

  generateFor(annualGrossSalary) {
    return new SalarySlip(
      this.#monthlyGrossSalaryFrom(annualGrossSalary),
      this.#nationalInsuranceContributionFrom(annualGrossSalary),
      this.#taxInformationFrom(annualGrossSalary)
    );
  }

  #monthlyGrossSalaryFrom(annualGrossSalary) {
    return this.#roundUp(annualGrossSalary / MONTHS_IN_A_YEAR, 2);
  }

  #nationalInsuranceContributionFrom(annualGrossSalary) {
    if (annualGrossSalary <= NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD)
      return 0;

    let nationalInsuranceContribution = this.#roundUp(
      (this.#amountEarnedAbove(
        NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD,
        annualGrossSalary
      ) *
        NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE) /
        MONTHS_IN_A_YEAR,
      2
    );

    return nationalInsuranceContribution;
  }

  #taxInformationFrom(annualGrossSalary) {
    let taxableIncome = this.#taxableIncomeFrom(annualGrossSalary);
    let taxPayable = this.#roundUp(taxableIncome * 0.2, 2);

    return new TaxInformation(taxableIncome, taxPayable);
  }

  #taxableIncomeFrom(annualGrossSalary) {
    if (annualGrossSalary <= TAXABLE_INCOME_THRESHOLD) return 0;

    let amountEarnedAboveTaxableIncomeThreshold = this.#amountEarnedAbove(
      TAXABLE_INCOME_THRESHOLD,
      annualGrossSalary
    );

    return this.#roundUp(
      amountEarnedAboveTaxableIncomeThreshold / MONTHS_IN_A_YEAR,
      2
    );
  }

  #amountEarnedAbove(threshold, amount) {
    return amount - threshold;
  }

  #roundUp(number, decimalDigits) {
    let factor = Math.pow(10, decimalDigits);
    return Math.round(number * factor) / factor;
  }
}

export default SalarySlipGenerator;
