class SalarySlipGenerator {
  constructor() {}

  generateFor(annualGrossSalary) {
    return this.#roundUp(annualGrossSalary / 12, 2);
  }

  #roundUp(number, decimalDigits) {
    let factor = Math.pow(10, decimalDigits);
    return Math.round(number * factor) / factor;
  }
}

export default SalarySlipGenerator;

