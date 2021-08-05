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

  add(taxInformation) {
    return new TaxInformation(
      this.#taxableIncome + taxInformation.taxableIncome(),
      this.#taxPayable + taxInformation.taxPayable()
    );
  }
}

export default TaxInformation;
