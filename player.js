class Player {
  constructor(playerId, playerToken) {
    this.id = playerId
    this.token = playerToken
    this.wins = 0
    this.turn = null
    this.board = []
  }
}