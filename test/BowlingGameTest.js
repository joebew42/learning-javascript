var assert = require('chai').assert

import BowlingGame from '../src/BowlingGame'


describe("BowlingGame", () => {
  var game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it("gutter game", () => {
    var i;
    for (i = 0; i < 20; i++) {
      game.roll(0);
    }

    assert.equal(game.score(), 0);
  });

  it("all ones", () => {
    var i;
    for (i = 0; i < 20; i++) {
      game.roll(1);
    }

    assert.equal(game.score(), 20);
  });
});


