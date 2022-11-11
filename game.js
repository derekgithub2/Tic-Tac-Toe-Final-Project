class Game {
  constructor() {
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.player1 = new Player(1, "🍺")
    this.player2 = new Player(2, "🍷")
    this.currentPlayer = this.player1
    this.turnCounter = 0
  }

  changeTurn() {
    this.turnCounter++
    console.log(this.turnCounter)
    console.log(`modulo 0: ${0%2}`)
    if (this.turnCounter % 2 === 1) {
      this.player1.turn = true
      this.player2.turn = false
      this.currentPlayer = this.player1
    } else if (this.turnCounter % 2 === 0) {
      this.player2.turn = true
      this.player1.turn = false
      this.currentPlayer = this.player2
    }
  }

  makeMove(indexOfMove) {
    console.log(`indexOfMove: ${indexOfMove}`)
    console.log(`currentPlayer: ${this.currentPlayer.id}`)
    console.log(`currentPlayer turn: ${this.currentPlayer.turn}`)
    if (this.currentPlayer.turn === true) {
      this.board.splice(indexOfMove, 1, this.currentPlayer.token);
    }
    this.changeTurn()
    console.log(game.board)
  }

  checkBoard() {
    switch (this.currentPlayer.token) {
      case this.board[0] && this.board[1] && this.board[2]:
      case this.board[3] && this.board[4] && this.board[5]:
      case this.board[6] && this.board[7] && this.board[8]:
      case this.board[0] && this.board[4] && this.board[8]:
      case this.board[0] && this.board[3] && this.board[6]:
      case this.board[1] && this.board[4] && this.board[7]:
      case this.board[2] && this.board[5] && this.board[8]:
      case this.board[2] && this.board[4] && this.board[6]:
        this.currentPlayer.increaseWins();
        console.log(`${this.currentPlayer.token} wins!`);
        break;
    }
  }
}

// module.exports = Game

// a way to keep track of data for the game board --> array
// a way to keep track of whos turn it is --> changeTurn()
// check the game's board data for win conditions --> checkBoard() or determineWinner()
// detect when a game is a draw (no one has won)
// way to reset the Game's board to begin a new game
// a short timeout is used after a comppleted game to reset the board.
