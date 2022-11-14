class Game {
  constructor() {
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.player1 = new Player(1, null);
    this.player2 = new Player(2, null);
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
  }

  start() {
    this.currentPlayer = this.player1;
    this.currentPlayer.turn = true;
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.turnCounter = 0;
  }

  changeTurn() {
    this.turnCounter++;
    // REFACTOR using bang operator.
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

  tokenHelper(a, b, c) {
    return this.board[a] === this.board[b] && this.board[b] === this.board[c];
  }

  checkBoard() {
    if (this.tokenHelper(0, 1, 2)) {
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(3, 4, 5)) {
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(6, 7, 8)) {
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(0, 4, 8)) {
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(0, 3, 6)) {
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(1, 4, 7)) {
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(2, 5, 8)) {
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(2, 4, 6)) {
      return this.currentPlayer.token;
    }
  }

  increaseWins() {
    this.currentPlayer.wins++;
  }
}
