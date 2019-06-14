const ROLLS = 21;

class BowlingGame {
  constructor() {
    this._currentRoll = 0;
    this._rolls = Array(ROLLS).fill(0)
  }

  roll(pins) {
    this._rolls[this._currentRoll++] = pins
  }

  score() {
    var score = 0;

    for (var i = 0; i < ROLLS; i++) {
      score += this._rolls[i];
    }

    return score;
  }
}

export default BowlingGame;