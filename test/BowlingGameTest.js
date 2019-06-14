var assert = require('chai').assert

import BowlingGame from '../src/BowlingGame'


describe("BowlingGame", () => {
  var game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it("gutter game", () => {
    rollMany(20, 0);

    assert.equal(game.score(), 0);
  });

  it("all ones", () => {
    rollMany(20, 1)

    assert.equal(game.score(), 20);
  });

  function rollMany(n, pins) {
    var i;
    for (i = 0; i < n; i++) {
      game.roll(pins);
    }
  }
});


