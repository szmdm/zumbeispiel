import { playerArray } from "../js/playersDataBase.js";
import { player0, player1, player2, player3 } from "../js/playersDataBase.js";

import { getDatabase, set, get, update, remove, ref, child, onValue }
    from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq1KjfcnHhStjeEMqI4z0ISFPsRz9kmcI",
    authDomain: "zumbeispiel-a5fb4.firebaseapp.com",
    projectId: "zumbeispiel-a5fb4",
    storageBucket: "zumbeispiel-a5fb4.appspot.com",
    messagingSenderId: "775341938935",
    appId: "1:775341938935:web:bdc8f27ab27db60dac1bf2",
    measurementId: "G-KDYFEDN736",
    databaseURL: "https://zumbeispiel-a5fb4-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();
const saveBtn = document.getElementById('save');
const updateBtn = document.getElementById('update');
const removeBtn = document.getElementById('remove');
const findBtn = document.getElementById('find');

// DOM single row elements

const formDate = document.getElementById('formDate');
const formPlace = document.getElementById('formPlace');

// const findDate = document.getElementById('dateFind');


const InsertData = () => {

    playerArray.forEach(element => {
        const playerId = element.idName;
        const playerNameValue = document.getElementById(playerId).value;

        const playerScore = element.idScore;
        const playerScoreValue = document.getElementById(playerScore).value;

        const playerAssist = element.idAssist;
        const playerAssistValue = document.getElementById(playerAssist).value;

        const idDescription = element.idDescription;
        const playerDescriptionValue = document.getElementById(idDescription).value;

        set(ref(db, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue), {
            place: formPlace.innerHTML,
            score: playerScoreValue,
            asist: playerAssistValue,
            notes: playerDescriptionValue,
        });
    })
    .then(() => {
        alert('Data added successfully!');
    })
    .catch((error) => {
        alert(error)
    })
};

const UpdateData = () => {
    playerArray.forEach(element => {
        const playerId = element.idName;
        const playerNameValue = document.getElementById(playerId).value;

        const playerScore = element.idScore;
        const playerScoreValue = document.getElementById(playerScore).value;

        const playerAssist = element.idAssist;
        const playerAssistValue = document.getElementById(playerAssist).value;

        const idDescription = element.idDescription;
        const playerDescriptionValue = document.getElementById(idDescription).value;

        update(ref(db, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue), {
            place: formPlace.innerHTML,
            score: playerScoreValue,
            asist: playerAssistValue,
            notes: playerDescriptionValue,
        });
    })
        // .then(() => {
        //     alert('Data updated successfully!');
        // })
        .catch((error) => {
            alert(error)
        })
};

const RemoveData = () => {
    playerArray.forEach(element => {
        const playerId = element.idName;
        const playerNameValue = document.getElementById(playerId).value;

        const playerScore = element.idScore;
        const playerScoreValue = document.getElementById(playerScore).value;

        const playerAssist = element.idAssist;
        const playerAssistValue = document.getElementById(playerAssist).value;

        const idDescription = element.idDescription;
        const playerDescriptionValue = document.getElementById(idDescription).value;

        remove(ref(db, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue), {
            place: formPlace.innerHTML,
            score: playerScoreValue,
            asist: playerAssistValue,
            notes: playerDescriptionValue,
        });
    })
        // .then(() => {
        //     alert('Data removed!');
        // })
        .catch((error) => {
            alert(error)
        })
};

// const FindData = () => {
//     const dbref = ref(db);

//     playerArray.forEach(element => {
//         const playerId = element.idName;
//         const playerNameValue = document.getElementById(playerId).value;

//         const playerScore = element.idScore;
//         const playerScoreValue = document.getElementById(playerScore).value;

//         const playerAssist = element.idAssist;
//         const playerAssistValue = document.getElementById(playerAssist).value;

//         const idDescription = element.idDescription;
//         const playerDescriptionValue = document.getElementById(idDescription).value;

//         get(child(dbref, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue))
//             .then((snapshot) => {
//                 if (snapshot.exists()) {
//                     someFieldId.innerHTML = "name" + snapshot.val().name;
//                     someFieldId.innerHTML = "score" + snapshot.val().score;
//                 }
//                 else {
//                     alert("no data found");
//                 }
//             })
//             .catch((error) => {
//                 alert(error);
//             })
//     })
// };


saveBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);



// retrieve firebase DATA

const savedData = ref(db, 'Fussballspiel/');

onValue(savedData, (snapshot) => {
    const data = snapshot.val();
    let gameTimes = Object.keys(data);

    function chartData() {

        // function bringStats(ofWhat) {
        //     for (let i = 0; i < gameTimes.length; i++) {
        //         let time = gameTimes[i];
        //         let gamePlayers = Object.keys(data[time]);
        //         for (let j = 0; j < gamePlayers.length; j++) {
        //             let player = gamePlayers[j];
        //             let score = data[time][player].score;
        //             let assist = data[time][player].asist;
        //             let note = data[time][player].notes;
        //             // console.log(player, score, assist)
        //         }

        //     }
        // }

        function outputStatsOfSinglePlayer(player) {
            const playerName = player.name;
            let scoreArray = [];
            for (let i = 0; i < gameTimes.length; i++) {
                let time = gameTimes[i];
                let score = data[time][playerName].score;
                scoreArray.push(score);
            }
            return scoreArray;
        }

        // CHART 

        const ctx = document.getElementById('myChart');

        const chartData = {
            labels: gameTimes,
            datasets: [
                {
                    label: player0.name,
                    data: outputStatsOfSinglePlayer(player0),
                    borderColor: 'red',
                    backgroundColor: 'yellow',
                    borderWidth: 1,
                },
                {
                    label: player1.name,
                    data: outputStatsOfSinglePlayer(player1),
                    borderColor: 'pink',
                    backgroundColor: 'green',
                    borderWidth: 1,
                },
                {
                    label: player2.name,
                    data: outputStatsOfSinglePlayer(player2),
                    borderColor: '#3377ff',
                    backgroundColor: '#66ff66',
                    borderWidth: 1,
                },
                {
                    label: player3.name,
                    data: outputStatsOfSinglePlayer(player3),
                    borderColor: '#ff00ff',
                    backgroundColor: '#ff0080',
                    borderWidth: 1,
                },
            ]
        };

        new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    }
                }
            },
        });
    }
    chartData();
});



