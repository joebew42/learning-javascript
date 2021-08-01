class TaxInformation {
  #taxableIncome;

  constructor(taxableIncome) {
    this.#taxableIncome = taxableIncome;
  }

  taxableIncome() {
    return this.#taxableIncome;
  }
}

export default TaxInformation;
