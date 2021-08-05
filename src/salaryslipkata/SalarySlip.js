const NO_NATIONAL_INSURANCE_CONTRIBUTION = 0;

class SalarySlip {
  _monthtlyGrossSalary = 0;
  _nationalInsuranceContribution = 0;
  #taxInformation;

  constructor(
    monthlyGrossSalary,
    nationalInsuranceContribution,
    taxInformation
  ) {
    this._monthtlyGrossSalary = monthlyGrossSalary;
    this._nationalInsuranceContribution =
      nationalInsuranceContribution || NO_NATIONAL_INSURANCE_CONTRIBUTION;

    this.#taxInformation = taxInformation;
  }

  taxInformation() {
    return this.#taxInformation;
  }

  taxFreeAllowance() {
    return this._monthtlyGrossSalary - this.#taxInformation.taxableIncome();
  }
}

export default SalarySlip;
