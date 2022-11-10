// main.js contains all DOM related JavaScript

// Global Variables
// const Player = require('./player')
const Game = require('./game')

var game = new Game

// Query Selectors
var boardGrid = document.querySelector('#gameBoard')
//queryselect the entire board container
    // event.target in the event listener to specify which box is being clicked.


// Event Listeners
window.addEventListener('on load', startGame)
boardGrid.addEventListener('click', function(){
    game.changeTurn()
    game.makeMove()
    game.checkBoard()

})

//eventlisteners for whole board container and listen for clicks inside it. 
    // event.target for the position? or write out event listener for each position?


// Functions and Event Handlers

function startGame () {
    game.changeTurn()
    game.makeMove()
    game.checkBoard()
}

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
// game.makeMove(0)
// game.makeMove(1)
// game.makeMove(2)
// game.makeMove(5)
// console.log(game.board)
// game.checkBoard()
// console.log(game.currentPlayer.wins)


// function to determine the winner
    // for loop through array to see what is spliced into the array at what index