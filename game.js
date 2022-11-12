class Game {
  constructor() {
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.player1 = new Player(1, 'X')
    this.player2 = new Player(2, 'O')
    this.currentPlayer = this.player1
    // this.otherPlayer = this.player2
    this.turnCounter = 0
  }

  start() {
    this.currentPlayer = this.player1
    this.currentPlayer.turn = true
  }

  changeTurn() {
    this.turnCounter++
    // REFACTOR using bang operator.
    if (this.turnCounter % 2 === 1) {
      // this.currentPlayer = !this.currentPlayer
      this.player1.turn = false
      this.player2.turn = true
      this.currentPlayer = this.player2
    } else if (this.turnCounter % 2 === 0) {
      // this.currentPlayer = !this.currentPlayer
      this.player2.turn = false
      this.player1.turn = true
      this.currentPlayer = this.player1
    }
  }

  preventPlacement() {
    if (!this.board.includes(this.player1.token) || !this.board.includes(this.player2.token)) {

    }
  }

  makeMove(indexOfMove) {
    console.log(`indexOfMove: ${indexOfMove}`)
    console.log(`currentPlayer: ${this.currentPlayer.id}`)
    this.preventPlacement()
    if (this.currentPlayer.turn === true) {
      this.board.splice(indexOfMove, 1, this.currentPlayer.token)
    }
  }

  // loop through array and check to see if token === array at 0 and 1 and 2 or 3 and 4 and 5 or 
  checkBoard() {
        if (this.board[0] === this.board[1] && this.board[1] === this.board[2]) {
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 
        else if (this.board[3] == this.board[4] && this.board[4] == this.board[5]){
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 
        else if (this.board[6] == this.board[7] && this.board[7] == this.board[8]){
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 
        else if (this.board[0] == this.board[4] && this.board[4] == this.board[8]){
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 
        else if (this.board[0] == this.board[3] && this.board[3] == this.board[6]){
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 
        else if (this.board[1] == this.board[4] && this.board[4] == this.board[7]){
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 
        else if (this.board[2] == this.board[5] && this.board[5] == this.board[8]){
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 
        else if (this.board[2] == this.board[4] && this.board[4] == this.board[6]){
            console.log(`${this.currentPlayer.token} wins!`)
            this.currentPlayer.increaseWins()
        } 

    // switch (this.currentPlayer.token) {
    //   case this.board[0] && this.board[1] && this.board[2]:
    //   case this.board[3] && this.board[4] && this.board[5]:
    //   case this.board[6] && this.board[7] && this.board[8]:
    //   case this.board[0] && this.board[4] && this.board[8]:
    //   case this.board[0] && this.board[3] && this.board[6]:
    //   case this.board[1] && this.board[4] && this.board[7]:
    //   case this.board[2] && this.board[5] && this.board[8]:
    //   case this.board[2] && this.board[4] && this.board[6]:
    //     this.currentPlayer.increaseWins()
    //     console.log(`${this.currentPlayer.token} wins!`)
    //     console.log(`this players wins: ${this.currentPlayer.wins}`)
    //     break
    //   default:
    //     console.log("no winner yet");
    // }
  }
}

// module.exports = Game

// a way to keep track of data for the game board --> array
// a way to keep track of whos turn it is --> changeTurn()
// check the game's board data for win conditions --> checkBoard() or determineWinner()
// detect when a game is a draw (no one has won)
// way to reset the Game's board to begin a new game
// a short timeout is used after a comppleted game to reset the board.
