import TaxInformation from "./TaxInformation.js";

const NO_NATIONAL_INSURANCE_CONTRIBUTION = 0;

class SalarySlip {
  _monthtlyGrossSalary = 0;
  _nationalInsuranceContribution = 0;
  _taxableIncome = 0;

  constructor(
    monthlyGrossSalary,
    nationalInsuranceContribution,
    taxableIncome
  ) {
    this._monthtlyGrossSalary = monthlyGrossSalary;
    this._nationalInsuranceContribution =
      nationalInsuranceContribution || NO_NATIONAL_INSURANCE_CONTRIBUTION;

    this._taxableIncome = taxableIncome;
  }

  taxInformation() {
    return new TaxInformation(this._taxableIncome);
  }
}

export default SalarySlip;
