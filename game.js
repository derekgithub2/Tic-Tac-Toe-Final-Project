class Game {
  constructor() {
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.player1 = new Player(1, "⛄️");
    this.player2 = new Player(2, "❄️");
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
    this.winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  start() {
    this.currentPlayer = this.player1;
    this.currentPlayer.turn = true;
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.turnCounter = 0;
  }

  changeTurn() {
    this.turnCounter++;
    if (this.turnCounter % 2 === 1) {
      this.player1.turn = false;
      this.player2.turn = true;
      this.currentPlayer = this.player2;
    } else if (this.turnCounter % 2 === 0) {
      this.player2.turn = false;
      this.player1.turn = true;
      this.currentPlayer = this.player1;
    }
  }

  makeMove(indexOfMove) {
    if (
      this.board[indexOfMove] !== this.player1.token &&
      this.board[indexOfMove] !== this.player2.token
    ) {
      if (this.currentPlayer.turn === true) {
        this.board.splice(indexOfMove, 1, this.currentPlayer.token);
      }
    } else {
      return false;
    }
  }

  checkBoard() {
    for (var i = 0; i < 8; i++) {
      var index = this.winCondition[i]
      var a = this.board[index[0]]
      var b = this.board[index[1]]
      var c = this.board[index[2]]
      if (a === '' || b === '' || c === '') {
        continue
      } 
      if (a === b && b === c) {
        return this.currentPlayer.token
      }
    }
  }

  increaseWins() {
    this.currentPlayer.wins++;
  }
}