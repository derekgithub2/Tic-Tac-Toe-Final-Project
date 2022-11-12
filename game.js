class Game {
  constructor() {
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.player1 = new Player(1, "X");
    this.player2 = new Player(2, "O");
    this.currentPlayer = this.player1;
    // this.otherPlayer = this.player2
    this.turnCounter = 0;
  }

  start() {
    this.currentPlayer = this.player1;
    this.currentPlayer.turn = true;
  }

  changeTurn() {
    this.turnCounter++;
    console.log(`turnCounter: ${this.turnCounter}`)
    // REFACTOR using bang operator.
    if (this.turnCounter % 2 === 1) {
      // this.currentPlayer = !this.currentPlayer
      this.player1.turn = false;
      this.player2.turn = true;
      this.currentPlayer = this.player2;
    } else if (this.turnCounter % 2 === 0) {
      // this.currentPlayer = !this.currentPlayer
      this.player2.turn = false;
      this.player1.turn = true;
      this.currentPlayer = this.player1;
    }
  }

  makeMove(indexOfMove) {
    console.log(`indexOfMove: ${indexOfMove}`);
    console.log(`currentPlayer: ${this.currentPlayer.id}`);
    if (
      this.board[indexOfMove] !== this.player1.token ||
      this.board[indexOfMove] !== this.player2.token
    ) {
      if (this.currentPlayer.turn === true) {
        this.board.splice(indexOfMove, 1, this.currentPlayer.token);
      }
    } else {
        return false
    }
    console.log(this.board)
  }

  preventPlacement (placeholder) {
    if (this.board[placeholder] === this.player1.token || this.player2.token) {
        console.log(`placeholder: ${placeholder}`)
        return true
    } else {
        return false
    }
  }

  checkBoard() {
    if (this.board[0] === this.board[1] && this.board[1] === this.board[2]) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    } else if (
      this.board[3] == this.board[4] &&
      this.board[4] == this.board[5]
    ) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    } else if (
      this.board[6] == this.board[7] &&
      this.board[7] == this.board[8]
    ) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    } else if (
      this.board[0] == this.board[4] &&
      this.board[4] == this.board[8]
    ) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    } else if (
      this.board[0] == this.board[3] &&
      this.board[3] == this.board[6]
    ) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    } else if (
      this.board[1] == this.board[4] &&
      this.board[4] == this.board[7]
    ) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    } else if (
      this.board[2] == this.board[5] &&
      this.board[5] == this.board[8]
    ) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    } else if (
      this.board[2] == this.board[4] &&
      this.board[4] == this.board[6]
    ) {
      console.log(`${this.currentPlayer.token} wins!`);
      this.currentPlayer.increaseWins();
    }
  }
}

// detect when a game is a draw (no one has won)
// way to reset the Game's board to begin a new game
// a short timeout is used after a comppleted game to reset the board.
