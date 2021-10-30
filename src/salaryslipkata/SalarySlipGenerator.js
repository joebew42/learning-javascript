import SalarySlip from "./SalarySlip";
import TaxInformation from "./TaxInformation";

const MONTHS_IN_A_YEAR = 12;

const NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD = 8060;
const NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE = 0.12;

const HIGHER_NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD = 43000;
const HIGHER_NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE = 0.02;

const BASE_TAXABLE_INCOME_THRESHOLD = 11000;
const BASE_TAXABLE_INCOME_TAX_PERCENTAGE = 0.2;

const HIGHER_TAXABLE_INCOME_THRESHOLD = 43000;
const HIGHER_TAXABLE_INCOME_TAX_PERCENTAGE = 0.4;

const EXCESS_HIGHER_TAXABLE_INCOME_THRESHOLD = 100000;
const EXCESS_HIGHER_TAXABLE_INCOME_TAX_PERCENTAGE = 0.4;

class SalarySlipGenerator {
  constructor() {}

  generateFor(annualGrossSalary) {
    let monthlyGrossSalary = this.#monthlyGrossSalaryFrom(annualGrossSalary);
    let nationalInsuranceContribution = this.#nationalInsuranceContributionFrom(
      annualGrossSalary
    );
    let taxInformation = this.#taxInformationFrom(annualGrossSalary);
    let taxFreeAllowance = monthlyGrossSalary - taxInformation.taxableIncome();

    return new SalarySlip(
      monthlyGrossSalary,
      nationalInsuranceContribution,
      taxInformation,
      taxFreeAllowance
    );
  }

  #monthlyGrossSalaryFrom(annualGrossSalary) {
    return this.#roundUp(annualGrossSalary / MONTHS_IN_A_YEAR, 2);
  }

  #nationalInsuranceContributionFrom(annualGrossSalary) {
    let standardNationalInsuranceContribution = this.#calculateNationalInsuranceContributionFor(
      annualGrossSalary,
      NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD,
      NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE,
      HIGHER_NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD
    );

    let higherNationalInsuranceContribution = this.#calculateNationalInsuranceContributionFor(
      annualGrossSalary,
      HIGHER_NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD,
      HIGHER_NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE
    );

    let nationalInsuranceContribution =
      standardNationalInsuranceContribution +
      higherNationalInsuranceContribution;

    return this.#roundUp(nationalInsuranceContribution, 2);
  }

  #calculateNationalInsuranceContributionFor(
    annualGrossSalary,
    minimumAmountRequired,
    contributionPercentage,
    maximumAmount
  ) {
    if (annualGrossSalary <= minimumAmountRequired) return 0;

    if (maximumAmount && annualGrossSalary > maximumAmount)
      annualGrossSalary = maximumAmount;

    let nationalInsuranceContribution = this.#roundUp(
      (this.#amountEarnedAbove(minimumAmountRequired, annualGrossSalary) *
        contributionPercentage) /
        MONTHS_IN_A_YEAR,
      2
    );

    return nationalInsuranceContribution;
  }

  #taxInformationFrom(annualGrossSalary) {
    let standardTaxInformation = this.#calculateTaxInformationFor(
      annualGrossSalary,
      BASE_TAXABLE_INCOME_THRESHOLD,
      BASE_TAXABLE_INCOME_TAX_PERCENTAGE,
      HIGHER_TAXABLE_INCOME_THRESHOLD
    );
    let higherTaxInformation = this.#calculateTaxInformationFor(
      annualGrossSalary,
      HIGHER_TAXABLE_INCOME_THRESHOLD,
      HIGHER_TAXABLE_INCOME_TAX_PERCENTAGE
    );
    let excessHigherTaxInformation = this.#calculateTaxInformationFor(
      annualGrossSalary,
      EXCESS_HIGHER_TAXABLE_INCOME_THRESHOLD,
      EXCESS_HIGHER_TAXABLE_INCOME_TAX_PERCENTAGE
    );
    excessHigherTaxInformation = new TaxInformation(
      this.#roundUp(excessHigherTaxInformation.taxableIncome() / 2, 2),
      this.#roundUp(excessHigherTaxInformation.taxPayable() / 2, 2)
    );

    return standardTaxInformation
      .add(higherTaxInformation)
      .add(excessHigherTaxInformation);
  }

  #calculateTaxInformationFor(
    annualGrossSalary,
    taxableIncomeThreshold,
    taxableIncomePercentage,
    maximumTaxableIncome
  ) {
    let taxableIncome = this.#taxableIncomeFrom(
      annualGrossSalary,
      taxableIncomeThreshold,
      maximumTaxableIncome
    );
    let taxPayable = this.#taxPayableFrom(
      taxableIncome,
      taxableIncomePercentage
    );

    return new TaxInformation(taxableIncome, taxPayable);
  }

  #taxPayableFrom(taxableIncome, percentage) {
    return this.#roundUp(taxableIncome * percentage, 2);
  }

  #taxableIncomeFrom(
    annualGrossSalary,
    taxableIncomeThreshold,
    maximumTaxableIncome
  ) {
    if (annualGrossSalary <= taxableIncomeThreshold) return 0;

    if (maximumTaxableIncome && annualGrossSalary > maximumTaxableIncome) {
      annualGrossSalary = maximumTaxableIncome;
    }

    let amountEarnedAboveTaxableIncomeThreshold = this.#amountEarnedAbove(
      taxableIncomeThreshold,
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
