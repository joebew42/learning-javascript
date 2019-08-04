const DEFAULT_DELIMITER = /,|\n/

const _StringCalculator = {
  add: function (numbersAsString) {
    let parsed = this._extractDelimiterAndNumbersFrom(numbersAsString)

    let allNumbers = this._allNumbersSeparatedBy(parsed.delimiter, parsed.numbersAsString)

    this._checkForNegatives(allNumbers);

    return allNumbers.reduce((sum, current) => sum + current, 0);
  },

  _extractDelimiterAndNumbersFrom: function (string) {
    let match = string.match(/\/\/(.+)\n(.+)/)
    if (match != null) {
      return {
        delimiter: match[1],
        numbersAsString: match[2]
      }
    }
    return {
      delimiter: DEFAULT_DELIMITER,
      numbersAsString: string
    }
  },

  _allNumbersSeparatedBy: function (delimiter, string) {
    return string
      .split(delimiter)
      .map(Number)
  },

  _checkForNegatives: function(numbers) {
    let allNegativeNumbers = numbers.filter((number) => number < 0)
    if (allNegativeNumbers.length > 0) {
      throw new Error(`negatives not allowed: ${allNegativeNumbers.join(",")}`)
    }
  }
}

const StringCalculator = {
  new: function () {
    return Object.create(_StringCalculator);
  }
}

export default StringCalculator;
