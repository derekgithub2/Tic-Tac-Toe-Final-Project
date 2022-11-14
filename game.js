class Game {
  constructor() {
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.player1 = new Player(1, "X");
    this.player2 = new Player(2, "O");
    this.currentPlayer = this.player1;
    this.turnCounter = 0;
  }

  start() {
    this.currentPlayer = this.player1;
    this.currentPlayer.turn = true;
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
    console.log('makemove in game.js invoked')
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

//   preventPlacement(indexPlaced) {
//     if (this.board[indexPlaced] !== this.player1.token && this.player2.token) {
//       console.log(this.board[indexPlaced]);
//       return true;
//     } else if (this.board[indexPlaced] === this.player1.token || this.player2.token) {
//       return false;
//     }
//   }

  tokenHelper(a, b, c) {
    return this.board[a] === this.board[b] && this.board[b] === this.board[c];
  }

  checkBoard() {
    if (this.tokenHelper(0, 1, 2)) {
      console.log(`${this.currentPlayer.token} wins by top row`);
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(3, 4, 5)) {
      console.log(`${this.currentPlayer.token} wins by middle row`);
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(6, 7, 8)) {
      console.log(`${this.currentPlayer.token} wins by bottom row`);
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(0, 4, 8)) {
      console.log(`${this.currentPlayer.token} wins by top left diag`);
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(0, 3, 6)) {
      console.log(`${this.currentPlayer.token} wins by left column`);
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(1, 4, 7)) {
      console.log(`${this.currentPlayer.token} wins middle column`);
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(2, 5, 8)) {
      console.log(`${this.currentPlayer.token} wins right column`);
      return this.currentPlayer.token;
    }
    if (this.tokenHelper(2, 4, 6)) {
      console.log(`${this.currentPlayer.token} wins top right diag`);
      return this.currentPlayer.token;
    }
  }

  increaseWins() {
    this.currentPlayer.wins++;
  }
}
