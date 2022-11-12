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
    console.log(game.preventPlacement())
    if (game.preventPlacement(parseInt(event.target.id))) {
        placeToken(parseInt(event.target.id))
        updateBoard(event)
        game.changeTurn()
        game.checkBoard()
        console.log("move was made and turn was changed.")
    } else if (!game.preventPlacement(parseInt(event.target.id))) {
        // error handling
        console.log("placement of piece prevented.")
        return false
    }
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
        event.target.innerText = game.currentPlayer.token
    } else {
        console.log("Not a valid spot.")
    }
}

function placeToken (index) {
    // if (game.board[index] !== game.player1.token || game.board[index] !== game.player2.token) {
        game.makeMove(index)
    // }
}

//function to determine a draw (probably in game.js file)


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