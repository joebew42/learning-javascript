const NO_NATIONAL_INSURANCE_CONTRIBUTION = 0;

class SalarySlip {
  _nationalInsuranceContribution = 0;
  #monthlyGrossSalary = 0;
  #taxInformation;

  constructor(
    monthlyGrossSalary,
    nationalInsuranceContribution,
    taxInformation
  ) {
    this._nationalInsuranceContribution =
      nationalInsuranceContribution || NO_NATIONAL_INSURANCE_CONTRIBUTION;

    this.#monthlyGrossSalary = monthlyGrossSalary;
    this.#taxInformation = taxInformation;
  }

  monthlyGrossSalary() {
    return this.#monthlyGrossSalary;
  }

  taxInformation() {
    return this.#taxInformation;
  }

  taxFreeAllowance() {
    return this.monthlyGrossSalary() - this.#taxInformation.taxableIncome();
  }
}

export default SalarySlip;
