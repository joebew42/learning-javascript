class TaxInformation {
  #taxableIncome;
  #taxPayable;

  constructor(taxableIncome, taxPayable) {
    this.#taxableIncome = taxableIncome;
    this.#taxPayable = taxPayable;
  }

  taxableIncome() {
    return this.#taxableIncome;
  }

  taxPayable() {
    return this.#taxPayable;
  }
}

export default TaxInformation;
