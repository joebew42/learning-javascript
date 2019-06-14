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

  it("one spare", () => {
    rollSpare()
    game.roll(3);
    rollMany(17, 0);

    assert.equal(game.score(), 16);
  });

  it("one strike", () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);

    assert.equal(game.score(), 24);
  });

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollMany(n, pins) {
    var i;
    for (i = 0; i < n; i++) {
      game.roll(pins);
    }
  }
});
