var assert = require('chai').assert

import BowlingGame from '../src/BowlingGame'

it("xxx", () => {
  var game = new BowlingGame();

  var i;
  for (i = 0; i < 20; i++) {
    game.roll(0);
  }

  assert.equal(game.score(), 0);
});

