class Player {
  constructor(playerId, playerToken) {
    this.id = playerId;
    this.token = playerToken;
    this.wins = 0;
    this.turn = null;
  }

  increaseWins() {
    this.wins++;
  }

}

// module.exports = Player