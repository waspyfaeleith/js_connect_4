var Board = function() {
  this.board = new Array(7);
  
  for (var i = 0; i < 7; i++) {
    this.board[i] = new Array(6);
  };
}

Board.prototype = {
}

module.exports = Board;