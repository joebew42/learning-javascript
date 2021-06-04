import SalarySlip from "./SalarySlip";

const MONTHS_IN_A_YEAR = 12;

class SalarySlipGenerator {
  constructor() {}

  generateFor(annualGrossSalary) {
    let monthlyGrossSalary = this.#roundUp(
      annualGrossSalary / MONTHS_IN_A_YEAR,
      2
    );

    return new SalarySlip(monthlyGrossSalary);
  }

  #roundUp(number, decimalDigits) {
    let factor = Math.pow(10, decimalDigits);
    return Math.round(number * factor) / factor;
  }
}

export default SalarySlipGenerator;
