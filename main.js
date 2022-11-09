// main.js contains all DOM related JavaScript

// Global Variables
const Player = require("./player")
const Game = require("./game")

// var player1 = new Player()
// var player2 = new Player()
var game = new Game
// player 1 icon
// player 2 icon


// Query Selectors

//queryselect the entire board container
    // event.target in the event listener to specify which box is being clicked.


// Event Listeners
// window.addEventListener('on load', function() {

// })
    //eventlisteners for whole board container and listen for clicks inside it. 
        // event.target for the position? or write out event listener for each position?


// Functions and Event Handlers

// function to place piece when player clicks position
    // gameBoard.splice(inputPosition, 0, 'player1')

function startGame () {
    game.changeTurn()
    console.log(game)
}
startGame()

// console.log(game.player1)
// console.log(game.player2)

// game.makeMove(0)
// console.log("counter", game.turnCounter)
// console.log(game.board)
// console.log("----------------")

// game.changeTurn()
// console.log("counter", game.turnCounter)
// game.makeMove(4)
// console.log(game.board)

// console.log("----------------")
// game.changeTurn()
// console.log("counter", game.turnCounter)
// game.makeMove(1)
// console.log(game.board)

// console.log("----------------")
// game.changeTurn()
// console.log("counter", game.turnCounter)
// game.makeMove(9)
// console.log(game.board)

// console.log("----------------")
// game.changeTurn()
// console.log("counter", game.turnCounter)
// game.makeMove(2)
// console.log(game.board)

// console.log(game.player1)
// console.log(game.player2)
game.makeMove(0)
game.makeMove(1)
game.makeMove(2)
game.makeMove(5)
console.log(game.board)
game.checkBoard()
console.log(game.currentPlayer.wins)


// function to determine the winner
    // for loop through array to see what is spliced into the array at what index
    