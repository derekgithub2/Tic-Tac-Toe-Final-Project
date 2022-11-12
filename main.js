var game = new Game()

// Query Selectors 
var formContainer = document.querySelector('#formContainer')
var submitButton = document.querySelector('#formSubmitButton')
var boardGrid = document.querySelector('#gameBoard')
var turnDisplay = document.querySelector("#playerTurnDisplay")

// Event Listeners
submitButton.addEventListener('click', function(event){
    changeDisplay(event)
    startGame()
})
boardGrid.addEventListener('click', function(event){
    updateBoard(event)
    game.makeMove(parseInt(event.target.id))
    game.checkBoard()
    game.changeTurn()
})

// Functions and Event Handlers
function startGame () {
    game.start()
}

function changeDisplay (event) {
    event.preventDefault()
    formContainer.classList.add('hidden')
    boardGrid.classList.remove('hidden')
}

function updateBoard (event) {
    if (event.target.type === 'button') {
        event.target.innerText = ''
        event.target.innerText = game.currentPlayer.token
    } else {
        // game.changeTurn()
        console.log("Not a valid spot.")
    }
}

// function disableButton (event) {
//     if (event.target)
// }


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
// console.log(`Player${game.currentPlayer.id} wins: ${game.currentPlayer.wins}`)
// console.log(game.player2)
// console.log(game.player1)



