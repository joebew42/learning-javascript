class BowlingGame {
  constructor() {
    this._currentRoll = 0;
    this._rolls = Array(21).fill(0)
  }

  roll(pins) {
    this._rolls[this._currentRoll++] = pins
  }

  score() {
    return this._rolls.reduce((acc, curr) => { return acc + curr });
  }
}

export default BowlingGame;