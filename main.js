var game = new Game()

// Query Selectors 
var formContainer = document.querySelector('#formContainer')
var submitButton = document.querySelector('#formSubmitButton')
var p1Name = document.querySelector('#player1Name')
var p2Name = document.querySelector('#player2Name')
var p1Label = document.querySelector('#player1NameLabel')
var p1InputName = document.querySelector('#player1Input')
var p2Label = document.querySelector('#player2NameLabel')
var p2InputName = document.querySelector('#player2Input')
var notificationDisplay = document.querySelector("#notificationDisplay")
var boardGrid = document.querySelector('#gameBoard')
var positions = document.querySelectorAll('.board-button')

// Event Listeners
formContainer.addEventListener('input', function () {
    enableSubmitButton()
})

submitButton.addEventListener('click', function(event){
    changeDisplay(event)
    updatePlayerNames()
    startGame()
})

boardGrid.addEventListener('click', function(event){
    var indexNum = parseInt(event.target.id)
    if (preventPlacement(event) === false) {
        placeToken(indexNum)
        updateBoard(event)
        determineWinner()
        nextTurn()
    } else {
        // error handling HERE
        console.log("placement of piece prevented.")
        return false
    }
})

// Functions and Event Handlers
function startGame () {
    game.start()
}

function enableSubmitButton () {
    if (p1InputName.value !== '' && p2InputName.value !== '') {
        submitButton.classList.remove('disabled')
    } else {
        submitButton.classList.add('disabled')
    }
}

function changeDisplay (event) {
    notificationDisplay.classList.remove('hidden')
    formContainer.classList.add('hidden')
    boardGrid.classList.remove('hidden')
    event.preventDefault()
}

function updatePlayerNames () {
    p1Name.innerText = p1InputName.value
    p2Name.innerText = p2InputName.value
    game.player1.id = p1InputName.value
    game.player2.id = p2InputName.value
}

function preventPlacement (event) {
    var attemptedPlacement = event.target
    if (attemptedPlacement.innerText === '') {
        console.log("spot is okay, let player place")
        return false
    } else {
        console.log("prevent placement true")
        return true
    }
}

function nextTurn () {
    game.changeTurn()
}

//COME BACK HERE DOUBLE CHECK
function updateBoard (event) {
    if (event.target.type === 'button' && event.target.innerText === "") {
        event.target.innerText = game.currentPlayer.token
    } else {
        // error handle HERE
        console.log("Not a valid spot.")
        return false;
    }
}

function placeToken (index) {
    game.makeMove(index)
}

function determineWinner () {
    console.log(game.turnCounter)
    if (game.checkBoard() === game.player1.token) {
        game.increaseWins()
        notificationDisplay.innerHTML +=`
            <section class="pop-up-container">
                <h4>${game.player1.id} wins!</h4>
                <button onclick="setTimeout(reloadGame(), 3000)" class="draw-pop-up">Play again?</button>
            </section>`
        console.log(`player 1 wins: ${game.player1.wins}`)
    } else if (game.checkBoard() === game.player2.token) {
        game.increaseWins()
        notificationDisplay.innerHTML +=`
            <section class="pop-up-container">
                <h4>${game.player2.id} wins!</h4>
                <button onclick="setTimeout(reloadGame(), 3000)" class="draw-pop-up">Play again?</button>
            </section>`
        console.log(`player 2 wins: ${game.player2.wins}`)
    } else if (game.turnCounter === 8) {
        notificationDisplay.innerHTML +=`
            <section class="pop-up-container">
                <p>It's a draw!</p>
                <button onclick="setTimeout(reloadGame(), 3000)"
                class="draw-pop-up">Play again?</button>
            </section>`
        console.log("game is a draw")
    }
}

function reloadGame() {
    game.start()
    changeDisplay()
    // window.location.reload()
}