import { player0, player1, player2, player3 } from "../js/playersDataBase.js";

// class Player {
//     constructor(id, name, idName, idScore, idAssist, idDescription) {
//         this.id = id,
//         this.name = name,
//         this.idName = idName;
//         this.idScore = idScore;
//         this.idAssist = idAssist;
//         this.idDescription = idDescription;
//     }
// }

// let player0 = new Player("0", "Player0", "playerName", "playerScore", "playerAssist", "playerNote");
// let player1 = new Player("1", "Dobry", "dobryName", "dobryScore", "dobryAssist", "dobryNote");
// let player2 = new Player("2", "Tasior", "tasiorName", "tasiorScore", "tasiorAssist", "tasiorNote");
// let player3 = new Player("3", "Kalafior", "kalafiorName", "kalafiorScore", "kalafiorAssist", "kalafiorNote");

const playerRow = document.getElementById("selectRow");

const addPlayerRow = (player) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add(player.name);
    newDiv.innerHTML = `
    <button class="add-del">X</button>
    <span class="player-name">
        <label for="text">player name</label>
        <input type="text" value="${player.name}" id="${player.idName}" />
    </span>
    <span class="score">
        <label for="number">scores</label>
        <input type="number" id="${player.idScore}" />
    </span>
    <span class="asist">
        <label for="number">asists</label>
        <input type="number" id="${player.idAssist}" />
    </span>
    <span class="notes">
        <label for="textarea">notes</label>
        <textarea id="${player.idDescription}"></textarea>
    </span>
    <button class="add-del">V</button> 
    `;

    playerRow.appendChild(newDiv);

}

addPlayerRow(player0);
addPlayerRow(player1);
addPlayerRow(player2);
addPlayerRow(player3);



