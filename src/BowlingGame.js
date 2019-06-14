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
    var frameIndex = 0;

    for (var frame = 0; frame < 10; frame++) {
      if (this._rolls[frameIndex] + this._rolls[frameIndex + 1] == 10) { // Is a spare
        score += 10 + this._rolls[frameIndex + 2];
      } else {
        score += this._rolls[frameIndex] + this._rolls[frameIndex + 1];
      }
      frameIndex += 2;
    }

    return score;
  }
}

export default BowlingGame;