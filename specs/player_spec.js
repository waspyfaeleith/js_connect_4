var assert = require('assert');
var Player = require('../Player');

describe ('Player', function() {
  var player;

  beforeEach (function () {
    player = new Player('Jack');
  });

  it ('Player has name', function() {
    assert.strictEqual('Jack', player.name);
  });
});