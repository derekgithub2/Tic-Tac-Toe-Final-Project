class Player {
    constructor(playerId, playerIcon) {
        this.id = playerId
        this.token = playerIcon
        this.wins = 0
    //properties:
        // id: (ex: 'one')
        // token: (ex: 'star img')
        // wins: 0

    }

    increaseWins () {
        this.wins++
    }
    // increaseWins function

}
