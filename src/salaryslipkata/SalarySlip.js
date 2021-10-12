const NO_NATIONAL_INSURANCE_CONTRIBUTION = 0;

class SalarySlip {
  _nationalInsuranceContribution = 0;
  #monthlyGrossSalary = 0;
  #taxInformation;
  #taxFreeAllowance;

  constructor(
    monthlyGrossSalary,
    nationalInsuranceContribution,
    taxInformation,
    taxFreeAllowance
  ) {
    this._nationalInsuranceContribution =
      nationalInsuranceContribution || NO_NATIONAL_INSURANCE_CONTRIBUTION;

    this.#monthlyGrossSalary = monthlyGrossSalary;
    this.#taxInformation = taxInformation;
    this.#taxFreeAllowance = taxFreeAllowance;
  }

  monthlyGrossSalary() {
    return this.#monthlyGrossSalary;
  }

  taxInformation() {
    return this.#taxInformation;
  }

  taxFreeAllowance() {
    return this.#taxFreeAllowance;
  }
}

export default SalarySlip;
