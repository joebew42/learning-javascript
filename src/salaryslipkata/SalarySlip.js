const NO_NATIONAL_INSURANCE_CONTRIBUTION = 0;

class SalarySlip {
  _monthtlyGrossSalary = 0;
  _nationalInsuranceContribution = 0;

  constructor(monthlyGrossSalary, nationalInsuranceContribution) {
    this._monthtlyGrossSalary = monthlyGrossSalary;
    this._nationalInsuranceContribution =
      nationalInsuranceContribution || NO_NATIONAL_INSURANCE_CONTRIBUTION;
  }
}

export default SalarySlip;
