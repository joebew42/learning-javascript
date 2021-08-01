import TaxInformation from "./TaxInformation.js";

const NO_NATIONAL_INSURANCE_CONTRIBUTION = 0;

class SalarySlip {
  _monthtlyGrossSalary = 0;
  _nationalInsuranceContribution = 0;
  _taxableIncome = 0;
  #taxInformation;

  constructor(
    monthlyGrossSalary,
    nationalInsuranceContribution,
    taxableIncome,
    taxInformation
  ) {
    this._monthtlyGrossSalary = monthlyGrossSalary;
    this._nationalInsuranceContribution =
      nationalInsuranceContribution || NO_NATIONAL_INSURANCE_CONTRIBUTION;

    this._taxableIncome = taxableIncome;
    this.#taxInformation = taxInformation;
  }

  taxInformation() {
    return new TaxInformation(this._taxableIncome);
  }
}

export default SalarySlip;
