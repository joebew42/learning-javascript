import SalarySlip from "./SalarySlip.js";
import TaxInformation from "./TaxInformation.js";
import BaseTaxInformationCalculator from "./BaseTaxInformationCalculator.js";
import HighTaxInformationCalculator from "./HighTaxInformationCalculator.js";
import ExcessHighTaxInformationCalculator from "./ExcessHighTaxInformationCalculator.js";

const MONTHS_IN_A_YEAR = 12;

const NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD = 8060;
const NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE = 0.12;

const HIGHER_NATIONAL_INSURANCE_CONTRIBUTION_THRESHOLD = 43000;
const HIGHER_NATIONAL_INSURANCE_CONTRIBUTION_PERCENTAGE = 0.02;

class SalarySlipGenerator {
  #taxCalculators = [];

  constructor(taxCalculators) {
    this.#taxCalculators = taxCalculators || [
      new BaseTaxInformationCalculator(),
      new HighTaxInformationCalculator(),
      new ExcessHighTaxInformationCalculator(),
    ];
  }

  generateFor(annualGrossSalary) {
    let monthlyGrossSalary = this.#monthlyGrossSalaryFrom(annualGrossSalary);
    let nationalInsuranceContribution = this.#nationalInsuranceContributionFrom(
      annualGrossSalary
    );
    let taxInformation = this.#calculateTaxInformationFor(annualGrossSalary);
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

  #calculateTaxInformationFor(annualGrossSalary) {
    return this.#taxCalculators.reduce(function (
      taxInformation,
      taxCalculator
    ) {
      return taxInformation.add(taxCalculator.calculateFor(annualGrossSalary));
    },
    TaxInformation.empty());
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
