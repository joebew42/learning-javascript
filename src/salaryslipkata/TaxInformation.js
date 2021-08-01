class TaxInformation {
  #taxableIncome;
  #taxPayable;
  #taxFreeAllowance;

  constructor(taxableIncome, taxPayable, taxFreeAllowance) {
    this.#taxableIncome = taxableIncome;
    this.#taxPayable = taxPayable;
    this.#taxFreeAllowance = taxFreeAllowance;
  }

  taxableIncome() {
    return this.#taxableIncome;
  }

  taxPayable() {
    return this.#taxPayable;
  }

  taxFreeAllowance() {
    return this.#taxFreeAllowance;
  }
}

export default TaxInformation;
