const NO_NATIONAL_INSURANCE_CONTRIBUTION = 0;

class SalarySlip {
  _monthlyGrossSalary = 0;
  _nationalInsuranceContribution = 0;
  #taxInformation;

  constructor(
    monthlyGrossSalary,
    nationalInsuranceContribution,
    taxInformation
  ) {
    this._monthlyGrossSalary = monthlyGrossSalary;
    this._nationalInsuranceContribution =
      nationalInsuranceContribution || NO_NATIONAL_INSURANCE_CONTRIBUTION;

    this.#taxInformation = taxInformation;
  }

  taxInformation() {
    return this.#taxInformation;
  }

  taxFreeAllowance() {
    return this._monthlyGrossSalary - this.#taxInformation.taxableIncome();
  }
}

export default SalarySlip;
