var game = new Game

// Query Selectors
var boardGrid = document.querySelector('#gameBoard')

// Event Listeners
boardGrid.addEventListener('click', function(event){
    game.makeMove()
    game.changeTurn()
    updateBoard(event)
    game.checkBoard()
})


// Functions and Event Handlers
function startGame () {
    console.log("game has started")
    game.changeTurn()
    game.makeMove()
    game.checkBoard()
}

function updateBoard (event) {
    if (event.target.type === 'button') {
        event.target.innerText = ''
        event.target.innerText = game.currentPlayer.token
        return true
    } else {
        game.changeTurn()
        console.log("Not a valid spot.")
    }
}



// function to determine the winner
    // for loop through array to see what is spliced into the array at what index

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


