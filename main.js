var game = new Game();

var formContainer = document.querySelector("#formContainer");
var submitButton = document.querySelector("#formSubmitButton");
var p1Name = document.querySelector("#player1Name");
var p2Name = document.querySelector("#player2Name");
var p1Label = document.querySelector("#player1NameLabel");
var p1InputName = document.querySelector("#player1Input");
var p2Label = document.querySelector("#player2NameLabel");
var p2InputName = document.querySelector("#player2Input");
var p1Wins = document.querySelector("#player1Wins");
var p2Wins = document.querySelector("#player2Wins");
var notificationContainer = document.querySelector("#notificationContainer")
var notificationDisplay = document.querySelector("#notificationDisplay");
var boardGrid = document.querySelector("#gameBoard");
var positions = document.querySelectorAll(".board-button");
var h2 = document.getElementsByTagName('h2')

formContainer.addEventListener("input", function () {
  enableSubmitButton();
});

submitButton.addEventListener("click", function (event) {
  changeDisplay(event);
  updatePlayerNames();
  startGame();
});

boardGrid.addEventListener("click", function (event) {
  var indexNum = parseInt(event.target.id);
  if (preventPlacement(event) === false) {
    placeToken(indexNum);
    updateBoard(event);
    determineWinner();
    nextTurn();
  } else {
    return false;
  }
});

function startGame() {
  game.start();
}

function enableSubmitButton() {
  if (p1InputName.value !== "" && p2InputName.value !== "") {
    submitButton.classList.remove("disabled");
  } else {
    submitButton.classList.add("disabled");
  }
}

function changeDisplay(event) {
  formContainer.classList.add("hidden");
  boardGrid.classList.remove("hidden");
  event.preventDefault();
}

function updatePlayerNames() {
  p1Name.innerText = p1InputName.value;
  p2Name.innerText = p2InputName.value;
  game.player1.id = p1InputName.value;
  game.player2.id = p2InputName.value;
}

function preventPlacement(event) {
  var attemptedPlacement = event.target;
  if (attemptedPlacement.innerText === "") {
    return false;
  } else {
    return true;
  }
}

function nextTurn() {
  game.changeTurn();
  notificationDisplay.innerText = `It's ${game.currentPlayer.token}'s turn!`
}

function updateBoard(event) {
  if (event.target.type === "button" && event.target.innerText === "") {
    event.target.innerText = game.currentPlayer.token;
  } else {
    return false;
  }
}

function placeToken(index) {
  game.makeMove(index);
}

function determineWinner() {
  if (game.checkBoard() === game.player1.token) {
    game.increaseWins();
    localStorage.setItem("Player1Wins", `${game.player1.wins}`);
    notificationContainer.classList.remove('hidden')
    notificationContainer.innerHTML = `
        <section class="pop-up-container">
            <h4>${game.player1.id} wins!</h4>
            <button onclick="setTimeout(reloadGame(event), 3000)" class="end-game-notification">Play again?</button>
        </section>`;
    p1Wins.innerText = `Wins: ${localStorage.getItem("Player1Wins")}`;
    helpStopMoves();
  } else if (game.checkBoard() === game.player2.token) {
    game.increaseWins();
    localStorage.setItem("Player2Wins", `${game.player2.wins}`);
    notificationContainer.classList.remove('hidden')
    notificationContainer.innerHTML = `
        <section class="pop-up-container">
            <h4>${game.player2.id} wins!</h4>
            <button onclick="setTimeout(reloadGame(event), 3000)" class="end-game-notification">Play again?</button>
        </section>`;
    p2Wins.innerText = `Wins: ${localStorage.getItem("Player2Wins")}`;
    helpStopMoves();
  } else if (game.turnCounter === 8) {
    notificationContainer.classList.remove('hidden')
    notificationContainer.innerHTML = `
        <section class="pop-up-container">
            <p>It's a draw!</p>
            <button onclick="setTimeout(reloadGame(event), 3000)"
            class="end-game-notification">Play again?</button>
        </section>`;
  }
  resetNames();
}

function helpStopMoves() {
  for (var i = 0; i < 9; i++) {
    positions[i].classList.add("disabled");
  }
}

function reloadGame() {
  game.start();
  notificationContainer.classList.add('hidden')
  notificationDisplay.innerText = `It's ${game.currentPlayer.token}'s turn!`
  for (var i = 0; i < 9; i++) {
    positions[i].innerText = "";
    positions[i].classList.remove("disabled");
  }
  resetNames();
}

function resetNames() {
  p1Name.innerText = `${game.player1.id}`;
  p2Name.innerText = `${game.player2.id}`;
}