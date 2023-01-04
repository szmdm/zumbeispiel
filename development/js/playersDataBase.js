class Player {
    constructor(id, name, idName, idScore, idAssist, idDescription) {
        this.id = id,
        this.name = name,
        this.idName = idName;
        this.idScore = idScore;
        this.idAssist = idAssist;
        this.idDescription = idDescription;
    }
}

let player0 = new Player("0", "Player0", "playerName", "playerScore", "playerAssist", "playerNote");
let player1 = new Player("1", "Dobry", "dobryName", "dobryScore", "dobryAssist", "dobryNote");
let player2 = new Player("2", "Tasior", "tasiorName", "tasiorScore", "tasiorAssist", "tasiorNote");
let player3 = new Player("3", "Kalafior", "kalafiorName", "kalafiorScore", "kalafiorAssist", "kalafiorNote");


export { player0, player1, player2, player3 };

const playerArray = [player0, player1, player2, player3];
export { playerArray };