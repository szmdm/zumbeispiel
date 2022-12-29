class Player {
    constructor(id, name, score, assist, description) {
        this.id = id,
        this.name = name;
        this.score = score;
        this.assist = assist;
        this.description = description;
    }
}

let player0 = new Player("0", "playerNameValue", "scoreValue", "asistValue", "notesValue");
let player1 = new Player("1", "Dobry", "0", "0", "");
let player2 = new Player("2", "Tasior", "0", "0", "");
let player3 = new Player("3", "Kalafior", "4", "5", "dochodzi w 10 minut");

const playerRow = document.getElementById("selectRow");

const addPlayerRow = (player) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add(player.name);
    newDiv.innerHTML = `
    <button class="add-del">X</button>
    <span class="player-name">
        <label for="text">player name</label>
        <input type="text" id="${player.name}" />
    </span>
    <span class="score">
        <label for="number">scores</label>
        <input type="number" id="${player.score}" />
    </span>
    <span class="asist">
        <label for="number">asists</label>
        <input type="number" id="${player.assist}" />
    </span>
    <span class="notes">
        <label for="textarea">notes</label>
        <textarea id="${player.description}"></textarea>
    </span>
    <button class="add-del">V</button> 
    `;

    playerRow.appendChild(newDiv);

}

addPlayerRow(player0);
addPlayerRow(player1);
addPlayerRow(player2);
addPlayerRow(player3);

