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

  add(taxInformation) {
    return new TaxInformation(
      this.#taxableIncome + taxInformation.taxableIncome(),
      this.#taxPayable + taxInformation.taxPayable(),
      this.#taxFreeAllowance + taxInformation.taxFreeAllowance()
    );
  }
}

export default TaxInformation;
