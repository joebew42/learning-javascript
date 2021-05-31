const MONTHS_IN_A_YEAR = 12;

class SalarySlipGenerator {
  constructor() {}

  generateFor(annualGrossSalary) {
    return this.#roundUp(annualGrossSalary / MONTHS_IN_A_YEAR, 2);
  }

  #roundUp(number, decimalDigits) {
    let factor = Math.pow(10, decimalDigits);
    return Math.round(number * factor) / factor;
  }
}

export default SalarySlipGenerator;

