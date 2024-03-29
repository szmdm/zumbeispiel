import { player0, player1, player2, player3 } from "../js/playersDataBase.js";


const playerRow = document.getElementById("selectRow");

const addPlayerRow = (player) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add(player.name);
    newDiv.innerHTML = `
    <!-- <button class="del">X</button> -->
    <span class="player-name">
        <label for="text">player name</label>
        <input type="text" value="${player.name}" id="${player.idName}" readonly style="background-color: silver"/>
    </span>
    <span class="score">
        <label for="number">scores</label>
        <input type="number" id="${player.idScore}" value="0" min="0"/>
    </span>
    <span class="asist">
        <label for="number">asists</label>
        <input type="number" id="${player.idAssist}" value="0" min="0"/>
    </span>
    <span class="notes">
        <label for="textarea">info</label>
        <textarea id="${player.idDescription}"></textarea>
    </span>
    <!-- <button class="add">V</button> -->
    `;

    playerRow.appendChild(newDiv);
}

addPlayerRow(player0);
addPlayerRow(player1);
addPlayerRow(player2);
addPlayerRow(player3);



